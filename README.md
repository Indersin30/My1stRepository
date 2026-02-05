# 3D Animated CV — Inder Singh Daffoti

This is a single-page **3D-style animated CV** where a runner moves through doors/clouds/tower checkpoints and presents your profile in storytelling format.

## Included sections

- Summary
- Skills
- Professional Experience
- Major Projects
- Awards, Education, Languages, Interests, and Contact

## Run locally

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

Click **Start 3D CV Journey**.

## Edit details later

All CV content is in `script.js` inside the `cvStages` array.

For each stage, edit:
- `title`
- `lines`
- `narrative`

## Notes about “3D animated video”

This implementation is a real-time browser animation with a 3D-like scene (perspective, depth, parallax, and card transforms).

If you need an actual downloadable video (MP4), you can screen-record while running the animation (e.g., OBS or browser recorder).
