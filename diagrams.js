// Side-view stick-figure poses (viewBox 0 -10 200 160). Joints: h head, s shoulder, e elbow, w wrist, p hip, k knee, a ankle.
(function () {
  const STAND = { h: [100, 28], s: [100, 42], p: [100, 72], k: [100, 102], a: [100, 132] };
  const SEAT = { h: [90, 55], s: [88, 70], p: [90, 110], k: [125, 105], a: [130, 132] };
  const line = (x1, y1, x2, y2, w = 3) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#8a94a6" stroke-width="${w}" stroke-linecap="round"/>`;
  const FLOOR = line(10, 136, 190, 136, 2);
  const pulldown = (end, label) => ({
    ...SEAT, ...(end ? { s: [86, 70], e: [92, 88], w: [110, 66] } : { e: [100, 45], w: [108, 22] }),
    hold: "bar", l: label,
    props: [FLOOR, line(108, -8, end ? 110 : 108, end ? 66 : 22, 1.5), line(75, 112, 100, 112, 4), line(98, 112, 98, 136, 3)]
  });
  const bench = [line(40, 100, 150, 100, 5), line(60, 100, 60, 136, 3), line(130, 100, 130, 136, 3), FLOOR];
  const incline = [line(66, 66, 108, 108, 5), line(104, 112, 140, 112, 5), line(120, 112, 120, 136, 3), FLOOR];

  window.POSES = {
    "goblet-squat": [
      { ...STAND, e: [108, 58], w: [112, 46], hold: "db", props: [FLOOR], l: "Start: stand tall, weight at chest" },
      { h: [104, 64], s: [100, 78], p: [90, 108], k: [125, 112], a: [95, 132], e: [112, 92], w: [116, 82], hold: "db", props: [FLOOR], l: "Bottom: sit down, chest up" }
    ],
    "lat-pulldown": [pulldown(false, "Start: arms overhead"), pulldown(true, "Pull bar to upper chest")],
    "underhand-pulldown": [pulldown(false, "Start: palms facing you"), pulldown(true, "Pull to chest, elbows tucked")],
    "back-extension": [
      { h: [90, 146], s: [92, 136], p: [100, 92], k: [128, 106], a: [150, 118], e: [100, 124], w: [112, 118], props: [FLOOR, line(92, 100, 108, 108, 6), line(150, 118, 150, 136, 3)], l: "Bottom: lower with flat back" },
      { h: [52, 66], s: [60, 71], p: [100, 92], k: [128, 106], a: [150, 118], e: [62, 82], w: [74, 74], props: [FLOOR, line(92, 100, 108, 108, 6), line(150, 118, 150, 136, 3)], l: "Top: body in a straight line" }
    ],
    "face-pull": [
      { ...STAND, e: [120, 40], w: [140, 38], hold: "rope", cable: [190, 36], props: [FLOOR], l: "Start: arms extended" },
      { ...STAND, e: [92, 44], w: [112, 32], hold: "rope", cable: [190, 36], props: [FLOOR], l: "Pull to face, elbows high" }
    ],
    "plank": [
      { h: [38, 100], s: [50, 104], p: [110, 114], k: [140, 119], a: [170, 125], e: [50, 128], w: [68, 128], props: [FLOOR], l: "Front plank: straight line" },
      { h: [62, 84], s: [70, 96], p: [120, 112], k: [145, 120], a: [170, 128], e: [70, 112], w: [70, 128], props: [FLOOR], l: "Side plank: hips lifted" }
    ],
    "bench-press": [
      { h: [48, 92], s: [60, 92], p: [110, 92], k: [135, 80], a: [145, 130], e: [78, 86], w: [62, 78], hold: "plate", props: bench, l: "Start: bar at mid-chest" },
      { h: [48, 92], s: [60, 92], p: [110, 92], k: [135, 80], a: [145, 130], e: [62, 70], w: [62, 48], hold: "plate", props: bench, l: "Press up until arms straight" }
    ],
    "rdl": [
      { ...STAND, w: [104, 78], e: [102, 60], hold: "plate", props: [FLOOR], l: "Start: stand tall, bar at thighs" },
      { h: [124, 86], s: [112, 84], p: [80, 78], k: [88, 106], a: [100, 132], e: [114, 98], w: [116, 114], hold: "plate", props: [FLOOR], l: "Hips back, flat back, bar down legs" }
    ],
    "seated-row": [
      { ...SEAT, e: [108, 80], w: [132, 92], hold: "handle", cable: [190, 92], props: [FLOOR, line(75, 112, 100, 112, 4)], l: "Start: arms extended" },
      { ...SEAT, s: [84, 70], h: [84, 55], e: [70, 90], w: [98, 92], hold: "handle", cable: [190, 92], props: [FLOOR, line(75, 112, 100, 112, 4)], l: "Pull to stomach, squeeze back" }
    ],
    "db-ohp": [
      { ...STAND, e: [108, 54], w: [102, 34], hold: "db", props: [FLOOR], l: "Start: dumbbells at shoulders" },
      { ...STAND, e: [101, 23], w: [101, 4], hold: "db", props: [FLOOR], l: "Press straight up" }
    ],
    "farmers-walk": [
      { ...STAND, e: [102, 60], w: [103, 78], hold: "db", props: [FLOOR], l: "Stand tall, core braced" },
      { ...STAND, k: [112, 100], a: [124, 130], e: [102, 60], w: [103, 78], hold: "db", props: [FLOOR], l: "Walk with short, controlled steps" }
    ],
    "hex-deadlift": [
      { h: [116, 60], s: [106, 68], p: [85, 96], k: [115, 108], a: [100, 132], e: [105, 90], w: [104, 112], hold: "plate", props: [FLOOR], l: "Start: hips low, chest up" },
      { ...STAND, e: [101, 62], w: [102, 84], hold: "plate", props: [FLOOR], l: "Finish: stand tall" }
    ],
    "incline-db-press": [
      { h: [72, 68], s: [80, 76], p: [110, 108], k: [138, 100], a: [140, 132], e: [92, 84], w: [88, 64], hold: "db", props: incline, l: "Start: dumbbells at chest" },
      { h: [72, 68], s: [80, 76], p: [110, 108], k: [138, 100], a: [140, 132], e: [94, 62], w: [106, 48], hold: "db", props: incline, l: "Press up and slightly together" }
    ],
    "split-squat": [
      { h: [105, 32], s: [105, 46], p: [105, 76], k: [120, 104], a: [120, 132], extra: [[[105, 76], [82, 98], [58, 102]]], props: [FLOOR, line(44, 104, 70, 104, 5), line(48, 104, 48, 136, 3)], l: "Start: rear foot on bench" },
      { h: [105, 60], s: [105, 74], p: [104, 106], k: [134, 106], a: [134, 132], extra: [[[104, 106], [82, 120], [58, 102]]], props: [FLOOR, line(44, 104, 70, 104, 5), line(48, 104, 48, 136, 3)], l: "Lower until front thigh is parallel" }
    ],
    "knee-raise": [
      { h: [100, 30], s: [100, 42], p: [100, 72], k: [100, 100], a: [100, 126], e: [100, 25], w: [100, 8], props: [line(80, 8, 120, 8, 4)], l: "Start: hang with arms straight" },
      { h: [100, 30], s: [100, 42], p: [100, 72], k: [125, 70], a: [118, 98], e: [100, 25], w: [100, 8], props: [line(80, 8, 120, 8, 4)], l: "Raise knees toward chest" }
    ]
  };

  window.renderPose = function (pose) {
    const hang = (s) => [s[0] + 1, s[1] + 17];
    const e = pose.e || hang(pose.s);
    const w = pose.w || [pose.s[0] + 2, pose.s[1] + 34];
    const pl = (pts) => `<polyline points="${pts.map((q) => q.join(",")).join(" ")}" fill="none"/>`;
    let g = (pose.props || []).join("");
    if (pose.cable) g += line(pose.cable[0], pose.cable[1], w[0], w[1], 1.5);
    g += `<g stroke="#1F4E78" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">`;
    g += pl([pose.s, pose.p]) + pl([pose.s, e, w]) + pl([pose.p, pose.k, pose.a, [pose.a[0] + 12, pose.a[1]]]);
    (pose.extra || []).forEach((x) => (g += pl(x)));
    g += `</g><circle cx="${pose.h[0]}" cy="${pose.h[1]}" r="9" fill="#1F4E78"/>`;
    const hx = w[0], hy = w[1];
    if (pose.hold === "plate") g += `<circle cx="${hx}" cy="${hy}" r="10" fill="none" stroke="#c0392b" stroke-width="4"/>`;
    if (pose.hold === "db") g += `<rect x="${hx - 7}" y="${hy - 3}" width="14" height="6" rx="2" fill="#c0392b"/>`;
    if (pose.hold === "bar") g += `<rect x="${hx - 13}" y="${hy - 2}" width="26" height="4" rx="2" fill="#c0392b"/>`;
    if (pose.hold === "rope" || pose.hold === "handle") g += `<circle cx="${hx}" cy="${hy}" r="4" fill="#c0392b"/>`;
    return `<svg viewBox="0 -10 200 160" role="img" aria-label="${pose.l}">${g}</svg>`;
  };
})();
