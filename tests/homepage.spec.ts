import { test, expect } from "@playwright/test";

test("homepage presents the approved brand and the four products in order", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Build whatShould exist.",
  );
  for (const selector of [
    "header .brand-mark img",
    ".about-brand-visual .ribbon-mark img",
    "footer .brand-mark img",
  ]) {
    await expect(page.locator(selector)).toHaveAttribute(
      "src",
      /ribbon-b-primary/,
    );
  }
  await expect(page.locator("#products article h3")).toHaveText([
    "Loomis.",
    "EventTicketsNG.",
    "ChatCart.",
    "ArewaVanta.",
  ]);
  await expect(page.locator("#products .illustration-caption")).toHaveCount(4);
  await expect(page.locator("#products .product-card-link")).toHaveCount(4);
  for (const link of await page.locator("#products .product-card-link").all()) {
    await expect(link).toHaveAttribute("href", /^\/products\//);
  }
  expect(errors).toEqual([]);
});

test("the first-load splash opens on the hero ribbon B and then clears the page", async ({
  page,
}) => {
  await page.goto("/", { waitUntil: "commit" });
  const splash = page.locator("#site-splash");
  await expect(splash).toBeVisible();
  await expect(splash.locator(".orbital-core img")).toHaveAttribute(
    "src",
    /ribbon-b/,
  );
  await expect(page.locator("html")).toHaveCSS("overflow", "hidden");
  await expect(splash).toBeHidden({ timeout: 15000 });
  await expect(page.locator("#site-splash")).toHaveCount(0);
  await expect(page.locator("html")).not.toHaveCSS("overflow", "hidden");
  await expect(page.locator("body")).not.toHaveCSS("overflow", "hidden");
});

test("desktop product disclosure supports keyboard access and Escape", async ({
  page,
}) => {
  await page.goto("/");
  const toggle = page.getByRole("button", {
    name: "Explore products",
    exact: true,
  });
  await toggle.focus();
  await page.keyboard.press("Enter");
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Tab");
  await expect(page.locator("#products-dropdown .text-link")).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await expect(toggle).toBeFocused();
  await expect(page.locator("#products-dropdown")).toBeHidden();
});

test("desktop products menu opens on hover and closes when clicking outside", async ({
  page,
}) => {
  await page.goto("/");
  await page.locator(".products-trigger").hover();
  await expect(page.locator("#products-dropdown")).toBeVisible();
  await page.locator(".hero-description").click({ force: true });
  await expect(page.locator("#products-dropdown")).toBeHidden();
});

test("mobile menu traps focus, closes on Escape, and follows section links", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const toggle = page.getByRole("button", {
    name: "Open navigation",
    exact: true,
  });
  await toggle.click();
  const dialog = page.getByRole("dialog", { name: "Site navigation" });
  await expect(dialog).toBeVisible();
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  await expect(page.locator("body")).toHaveCSS("overflow", "hidden");
  const last = dialog.getByRole("link", {
    name: "Start a project",
    exact: true,
  });
  await last.focus();
  await page.keyboard.press("Tab");
  await expect(
    dialog.getByRole("link", { name: "Bagatata Technologies Limited home" }),
  ).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(toggle).toBeFocused();
  await expect(page.locator("body")).not.toHaveCSS("overflow", "hidden");
  await toggle.click();
  await dialog.getByRole("link", { name: "Services", exact: true }).click();
  await expect(dialog).not.toBeVisible();
  await expect(page).toHaveURL(/#services$/);
});

test("mobile menu closes when navigation switches to a product route", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page
    .getByRole("button", { name: "Open navigation", exact: true })
    .click();
  await page
    .getByRole("dialog")
    .getByRole("link", { name: /Loomis/ })
    .click();
  await expect(page).toHaveURL(/\/products\/loomis$/);
  await expect(page.getByRole("dialog")).not.toBeVisible();
  await expect(page.locator("body")).not.toHaveCSS("overflow", "hidden");
});

test("navigation identifies the visible section and product route", async ({
  page,
}) => {
  await page.goto("/");
  const navigation = page.getByRole("navigation", {
    name: "Primary navigation",
  });
  await expect(
    navigation.getByRole("link", { name: "Home", exact: true }),
  ).toHaveAttribute("aria-current", "page");
  await page.locator("#services").scrollIntoViewIfNeeded();
  await expect(
    navigation.getByRole("link", { name: "Services", exact: true }),
  ).toHaveAttribute("aria-current", "location");
  await page.goto("/products/loomis");
  await expect(
    page.getByRole("button", { name: "Explore products", exact: true }),
  ).toHaveClass(/is-current/);
});

test("navbar fits the desktop breakpoint and resizing clears the mobile dialog", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1024, height: 900 });
  await page.goto("/");
  const brand = await page.locator(".site-header .brand").boundingBox();
  const navigation = await page.locator(".desktop-navigation").boundingBox();
  const cta = await page.locator(".header-cta").boundingBox();
  expect(brand && navigation && cta).toBeTruthy();
  expect(brand!.x + brand!.width).toBeLessThan(navigation!.x);
  expect(navigation!.x + navigation!.width).toBeLessThan(cta!.x);
  expect(cta!.x + cta!.width).toBeLessThan(1024);
  await page.setViewportSize({ width: 999, height: 900 });
  await page
    .getByRole("button", { name: "Open navigation", exact: true })
    .click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.setViewportSize({ width: 1024, height: 900 });
  await expect(page.getByRole("dialog")).not.toBeVisible();
  await expect(page.locator("body")).not.toHaveCSS("overflow", "hidden");
});

test("the hero preserves the original B and lets visitors pause and resume its motion", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.locator(".hero .orbital-core img")).toHaveAttribute(
    "src",
    /ribbon-b/,
  );
  await expect(page.locator(".hero .sphere-rings")).toHaveCSS(
    "animation-name",
    "sphere-turn",
  );
  const pause = page.getByRole("button", {
    name: "Pause animation",
    exact: true,
  });
  await pause.click();
  await expect(
    page.getByRole("button", { name: "Resume animation", exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
  for (const selector of [
    ".hero .sphere-rings",
    ".hero .orbital-sphere",
    ".hero .orbital-trail",
    ".hero .orbital-core",
    ".hero .orbital-haze",
    ".hero .caption-top",
  ]) {
    for (const layer of await page.locator(selector).all()) {
      await expect(layer).toHaveCSS("animation-play-state", "paused");
    }
  }
  const playheads = () =>
    page.locator(".orbital-art").evaluate((visual) =>
      visual.getAnimations({ subtree: true }).map((animation) => ({
        time: animation.currentTime,
        state: animation.playState,
      })),
    );
  const frozen = await playheads();
  expect(frozen.length).toBeGreaterThan(0);
  expect(frozen.every((animation) => animation.state === "paused")).toBe(true);
  await page.mouse.move(1000, 350);
  await page.waitForTimeout(150);
  expect(await playheads()).toEqual(frozen);
  await page
    .getByRole("button", { name: "Resume animation", exact: true })
    .click();
  await expect(page.locator(".hero .sphere-rings")).toHaveCSS(
    "animation-play-state",
    "running",
  );
  await expect
    .poll(async () =>
      (await playheads()).some(
        (animation, index) => animation.time !== frozen[index].time,
      ),
    )
    .toBe(true);
});

test("hero motion rests offscreen and preserves the visitor’s pause choice", async ({
  page,
}) => {
  await page.goto("/");
  const visual = page.locator(".hero-visual");
  const rings = page.locator(".hero .sphere-rings");
  await expect(visual).toHaveAttribute("data-idle", "false");
  await page.locator("#services").scrollIntoViewIfNeeded();
  await expect(visual).toHaveAttribute("data-idle", "true");
  await expect(rings).toHaveCSS("animation-play-state", "paused");
  await visual.scrollIntoViewIfNeeded();
  await expect(visual).toHaveAttribute("data-idle", "false");
  await expect(rings).toHaveCSS("animation-play-state", "running");
  await page
    .getByRole("button", { name: "Pause animation", exact: true })
    .click();
  await page.locator("#services").scrollIntoViewIfNeeded();
  await expect(visual).toHaveAttribute("data-idle", "true");
  await visual.scrollIntoViewIfNeeded();
  await expect(visual).toHaveAttribute("data-idle", "false");
  await expect(rings).toHaveCSS("animation-play-state", "paused");
  await expect(
    page.getByRole("button", { name: "Resume animation", exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
});

test("hero calls to action lead to products and project inquiries", async ({
  page,
}) => {
  await page.goto("/");
  await page
    .locator(".hero")
    .getByRole("link", { name: "Explore our work", exact: true })
    .click();
  await expect(page).toHaveURL(/#products$/);
  await page
    .locator(".hero")
    .getByRole("link", { name: "Start a project", exact: true })
    .click();
  await expect(page).toHaveURL(/#contact$/);
});

for (const width of [320, 390, 768, 1024, 1440]) {
  test(`homepage has no horizontal overflow at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
    expect(
      await page
        .locator(".hero h1")
        .evaluate((heading) => heading.scrollWidth <= heading.clientWidth + 1),
    ).toBe(true);
    for (const action of await page.locator(".hero-actions > a").all()) {
      const bounds = await action.boundingBox();
      expect(bounds).not.toBeNull();
      expect(bounds!.x).toBeGreaterThanOrEqual(0);
      expect(bounds!.x + bounds!.width).toBeLessThanOrEqual(width);
    }
    for (const card of await page
      .locator("#products .product-card-link")
      .all()) {
      await expect(card).toBeVisible();
      expect(
        await card.evaluate(
          (element) => element.scrollWidth <= element.clientWidth + 1,
        ),
      ).toBe(true);
    }
  });
}

test("product cards open their corresponding individual views", async ({
  page,
}) => {
  for (const slug of ["loomis", "eventticketsng", "chatcart", "arewavanta"]) {
    await page.goto("/");
    await page.locator(`#products a[href='/products/${slug}']`).click();
    await expect(page).toHaveURL(new RegExp(`/products/${slug}$`));
    await expect(page.locator(".product-detail-visual")).toBeVisible();
    await expect(
      page.locator(".product-detail-visual .illustration-caption"),
    ).toContainText("Illustrative interface");
  }
});

test("reduced motion removes decorative animation", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator(".hero .sphere-rings")).toHaveCSS(
    "animation-name",
    "none",
  );
  await expect(page.locator(".hero .orbital-sphere")).toHaveCSS(
    "animation-name",
    "none",
  );
  for (const layer of await page
    .locator(".hero .orbital-trail, .hero .orbital-core, .hero .orbital-haze")
    .all()) {
    await expect(layer).toHaveCSS("animation-name", "none");
  }
  expect(
    await page
      .locator(".orbital-art")
      .evaluate((art) => art.getAnimations({ subtree: true }).length),
  ).toBe(0);
  await expect(page.locator(".hero-motion-toggle")).toBeHidden();
  await expect(page.locator("#products h2")).toBeVisible();
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await expect(
    page.getByRole("button", { name: "Pause animation", exact: true }),
  ).toBeVisible();
  await expect(page.locator(".hero .sphere-rings")).toHaveCSS(
    "animation-name",
    "sphere-turn",
  );
});

test("unconfigured inquiry delivery is clearly unavailable and never claims success", async ({
  page,
  request,
}) => {
  await page.goto("/");
  await expect(page.locator("#contact-availability")).toContainText(
    "Online inquiries are not available yet",
  );
  await expect(
    page.getByRole("button", { name: "Send inquiry" }),
  ).toBeDisabled();
  const response = await request.post("/api/contact", {
    data: {
      name: "Test",
      email: "test@example.com",
      message: "This should never be delivered.",
    },
  });
  expect(response.status()).toBe(503);
  expect(await response.json()).not.toHaveProperty("sent");
});

test("optional project details expand by keyboard while unavailable fields remain disabled", async ({
  page,
}) => {
  await page.goto("/");
  const contact = page.locator("#contact");
  const details = contact.locator("details");
  const toggle = details.locator("summary");
  await expect(contact.getByLabel("Company or organization")).toBeHidden();
  await toggle.focus();
  await page.keyboard.press("Enter");
  await expect(details).toHaveAttribute("open", "");
  await expect(contact.getByLabel("Company or organization")).toBeVisible();
  await expect(contact.getByLabel("Approximate budget")).toBeVisible();
  await expect(contact.getByLabel("Company or organization")).toBeDisabled();
  for (const choice of await contact.getByRole("radio").all()) {
    await expect(choice).toBeDisabled();
  }
  await page.keyboard.press("Space");
  await expect(details).not.toHaveAttribute("open");
  await page.keyboard.press("Tab");
  await expect(
    contact.getByRole("link", { name: "Privacy notice" }),
  ).toBeFocused();
});

test("footer navigation works on mobile and back to top preserves the current product page", async ({
  page,
}) => {
  await page.setViewportSize({ width: 320, height: 900 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/products/loomis");
  const footer = page.getByRole("contentinfo");
  const products = footer.getByRole("navigation", { name: "Products & work" });
  await expect(products.getByRole("link")).toHaveText([
    "Loomis",
    "EventTicketsNG",
    "ChatCart",
    "ArewaVanta",
  ]);
  await products.getByRole("link", { name: "ArewaVanta" }).click();
  await expect(page).toHaveURL(/\/products\/arewavanta$/);

  const backToTop = footer.getByRole("link", { name: "Back to top" });
  await backToTop.focus();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/\/products\/arewavanta#main-content$/);
  await expect(page.getByRole("main")).toBeFocused();
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBeLessThan(2);

  await footer.getByRole("link", { name: "Start a conversation" }).click();
  await expect(page).toHaveURL(/\/#contact$/);
  await expect(
    page.getByRole("form", { name: "Project inquiry" }),
  ).toBeVisible();
  await footer.getByRole("link", { name: "Privacy notice" }).click();
  await expect(page).toHaveURL(/\/privacy$/);
});

test("the phone hero integrates the supplied B beside the headline", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const width of [320, 390, 430, 657, 700]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
    const artwork = await page.locator(".orbital-art").boundingBox();
    const headline = await page.locator(".hero h1").boundingBox();
    const accent = await page.locator(".hero-heading-accent").boundingBox();
    const description = await page.locator(".hero-description").boundingBox();
    expect(artwork && headline && accent && description).toBeTruthy();
    expect(artwork!.y).toBeLessThan(headline!.y + headline!.height);
    expect(artwork!.y + artwork!.height).toBeLessThan(accent!.y);
    expect(artwork!.y + artwork!.height).toBeLessThan(description!.y);
    await expect(page.locator(".hero .orbital-core img")).toHaveAttribute(
      "src",
      /ribbon-b-primary/,
    );
    for (const layer of await page
      .locator(
        ".hero .sphere-rings, .hero .orbital-orbit, .hero .orbital-outer, .hero .orbital-point",
      )
      .all()) {
      await expect(layer).toBeVisible();
    }
    for (const link of await page.locator(".hero-actions > a").all()) {
      expect((await link.boundingBox())!.height).toBeGreaterThanOrEqual(44);
    }
  }
});

test("the complete mobile orbital scene animates and pauses together", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await expect(page.locator(".hero-visual")).toHaveAttribute(
    "data-idle",
    "false",
  );
  const clocks = () =>
    page
      .locator(".hero .orbital-stage")
      .evaluate((e) =>
        e
          .getAnimations({ subtree: true })
          .map((a) => ({ time: a.currentTime, state: a.playState })),
      );
  const initial = await clocks();
  expect(initial.length).toBeGreaterThanOrEqual(8);
  await expect
    .poll(async () =>
      (await clocks()).some((a, i) => a.time !== initial[i].time),
    )
    .toBe(true);
  await page
    .getByRole("button", { name: "Pause animation", exact: true })
    .click();
  await expect
    .poll(async () => (await clocks()).every((a) => a.state === "paused"))
    .toBe(true);
  const stopped = await clocks();
  await page.waitForTimeout(150);
  expect(await clocks()).toEqual(stopped);
  await page
    .getByRole("button", { name: "Resume animation", exact: true })
    .click();
  await expect
    .poll(async () => (await clocks()).every((a) => a.state === "running"))
    .toBe(true);
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect.poll(async () => (await clocks()).length).toBe(0);
  await expect(page.locator(".hero .orbital-core img")).toBeVisible();
});

test("mobile services expand with the keyboard and desktop still shows every service", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const list = page.locator(".mobile-service-list");
  const first = list.locator("details").nth(0);
  const second = list.locator("details").nth(1);
  await expect(first).toHaveAttribute("open", "");
  await expect(second).not.toHaveAttribute("open");
  await second.locator("summary").focus();
  await page.keyboard.press("Enter");
  await expect(second).toHaveAttribute("open", "");
  await expect(first).not.toHaveAttribute("open");
  await page.keyboard.press("Tab");
  await expect(
    second.getByRole("link", { name: "Discuss Mobile product engineering" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#contact$/);
  await page.setViewportSize({ width: 1440, height: 1000 });
  await expect(list).toBeHidden();
  await expect(page.locator(".services-grid")).toBeVisible();
  await expect(page.locator(".services-grid .service-card")).toHaveCount(5);
});
