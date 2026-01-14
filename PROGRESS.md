# Situational Leadership Tool - Progress Tracker

## Current Status: Deployed to Netlify - Shared with Sean

**Last Updated:** 2026-01-14

**Live URL:** Check Netlify dashboard for the deployed URL

**GitHub:** https://github.com/goagentflow/situational-leadership-tool (private)

---

## What's Been Done

### Research
- [x] Verified Ken Blanchard Situational Leadership model accuracy
- [x] Confirmed D1-D4 development levels and S1-S4 leadership styles mapping

### Development
- [x] System prompt designed for Claude API
- [x] Web chat interface built
- [x] Diagnosis flow implemented
- [x] Practice mode implemented
- [x] Feedback system implemented
- [x] Upgraded to Claude Opus 4.5 (most advanced model)
- [x] Created Netlify Function to proxy API calls (hides API key)
- [x] Deployed to Netlify
- [x] Pushed to GitHub (goagentflow organisation)

### Sharing
- [x] Sent to Sean Miller for feedback

---

## Architecture

```
User → Netlify (static site) → Netlify Function → Anthropic API
                                    ↑
                          API key stored here
                          (environment variable)
```

**Files:**
- `index.html` - Main page with chat interface
- `styles.css` - Clean, professional styling
- `app.js` - Application logic (calls /api/chat)
- `netlify/functions/chat.js` - Serverless proxy to Anthropic
- `netlify.toml` - Netlify build configuration

---

## Cost Estimate

Using Claude Opus 4.5:
- ~£0.80-£1.00 per full conversation
- Input: $15/million tokens
- Output: $75/million tokens

---

## What's Next

1. **Await Sean's feedback** - Does it diagnose correctly? Is practice mode useful?
2. **Validate accuracy** - Test all four development levels with Sean
3. **Iterate based on feedback**
4. **Future enhancements to consider:**
   - Example scenario buttons
   - Visual diagram of the SLII model
   - Session history
   - Voice interface (Phase 2)

---

## Test Scenarios

**Good messy test (recommended):**
> "I've got a tricky one with Dev. He's technically brilliant - probably knows more than me about the systems - but he keeps going off and doing his own thing without telling anyone. Last sprint he rebuilt something we didn't ask for. I don't know if I should praise him or have a difficult conversation."

**Expected:** Tool should recognise this is D4 (high skill, high motivation) but with an alignment problem, not a capability problem. Needs S4 Delegating done properly - clear goals and boundaries upfront.

---

## Technical Decisions

- **Model:** Claude Opus 4.5 (claude-opus-4-5-20251101)
- **Stack:** HTML, CSS, JavaScript (vanilla)
- **Hosting:** Netlify (free tier)
- **API Key:** Stored as Netlify environment variable (ANTHROPIC_API_KEY)
- **Serverless:** Netlify Functions (proxies API calls)

---

## The SLII Model (Quick Reference)

| Development Level | Competence | Commitment | Leadership Style |
|-------------------|------------|------------|------------------|
| D1 - Enthusiastic Beginner | Low | High | S1 - Directing |
| D2 - Disillusioned Learner | Some | Low | S2 - Coaching |
| D3 - Capable but Cautious | High | Variable | S3 - Supporting |
| D4 - Self-Reliant Achiever | High | High | S4 - Delegating |

---

## Changelog

### 2026-01-14 (PM)
- Upgraded model to Claude Opus 4.5
- Created Netlify Function (`netlify/functions/chat.js`) to proxy API calls
- Removed API key modal from UI (no longer needed)
- Created GitHub repo under goagentflow organisation
- Deployed to Netlify
- Added ANTHROPIC_API_KEY as environment variable in Netlify
- Sent to Sean Miller for testing

### 2026-01-14 (AM)
- Created PROGRESS.md
- Researched and verified Blanchard SLII model
- Built complete prototype:
  - index.html with chat interface
  - styles.css with responsive design
  - app.js with Claude API integration and system prompt
