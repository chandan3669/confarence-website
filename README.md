# ICACST-2027 Conference Website Template

A modern, production-grade, responsive academic conference website engineered based on the architecture, tokens, and features of **esicconference.com** (ICESICSC).

---

## 🏛️ Website Overview

This website template is designed specifically for universities, colleges, and engineering institutes organizing national and international conferences (IEEE, Springer, or Scopus indexed).

### Key Features Included:
- **Breaking News Marquee Ticker:** Announcements, deadlines, and hybrid mode notifications.
- **Institutional Header:** Prominent college crest, department branding, NAAC/NIRF credentials, and technical co-sponsorship badges.
- **Sticky Glassmorphism Navbar:** Smooth navigation with dropdown menus for Committees and Authors.
- **Dynamic Countdown Timer:** Real-time countdown to the paper submission deadline.
- **Technical Co-Sponsorship Showcase:** IEEE Section, IEEE Consumer Technology Society, Scopus, and Microsoft CMT badges.
- **Interactive Call-for-Papers & Tracks:** 8 comprehensive tracks with live category filtering (AI, Security, IoT, Computing).
- **Manuscript Submission Portal:** Microsoft CMT integration, IEEE Word/LaTeX template downloads.
- **Interactive Registration Table:** Currency toggle between **INR (₹)** and **USD ($)** with category pricing (Students, Faculty, Industry, Attendees).
- **Keynote Speakers Directory:** Speaker cards with designations, international affiliations, and speech topics.
- **Organizing Committees:** Categorized boards (Patrons, General Chairs, Organizing Chairs, Technical Program Committee, International Advisory Board).
- **Venue & Travel Connectivity:** Air, train, road logistics, VISA assistance, and recommended accommodation list.
- **Interactive Contact Form & Helpdesk:** Working form validation feedback and departmental email directory.

---

## 📂 Project Structure

```
├── index.html                   # Main Flagship Portal (all key sections in one view)
├── important-dates.html         # Important Dates & Milestones
├── call-for-papers.html         # Call for Papers, Sub-topics & Scope
├── organizing-committees.html   # Patrons, Chairs, TPC & Advisory Board
├── paper-submission.html        # Guidelines, Templates, Plagiarism & No-Show Policy
├── registration.html            # Registration Tariff, Payment & Refund Policy
├── keynote-speakers.html        # Keynote & Plenary Speakers
├── conference-schedule.html     # Day 1 & Day 2 Detailed Program Schedule
├── how-to-reach.html            # Travel Logistics, Maps, Hotels & VISA
├── contact-us.html              # Contact Secretariat & Inquiry Form
├── assets/
│   ├── css/
│   │   └── style.css            # Token-driven design system & responsive styling
│   ├── js/
│   │   └── main.js              # Countdown, track filter, currency switch, mobile menu
│   └── images/                  # Image assets & badges
└── README.md                    # Documentation & Customization Guide
```

---

## 🎨 Design Tokens & Color Palette

- **Primary Emerald Accent:** `#5DA834` (hover: `#4C8C2A`)
- **Forest Green Brand:** `#02590f`
- **Dark Gradient Surface:** `linear-gradient(90deg, #0f2027, #203a43, #2c5364)`
- **Navy Primary Text:** `#234262`
- **Backgrounds:** Clean white `#ffffff` and subtle slate `#f8fafc`
- **Fonts:** Poppins (Headings) & Inter / Verdana (Body)

---

## 🛠️ How to Customize for Any College / University

1. **College Name & Department:**
   - Open any `.html` file and update:
     - `<h3>National Institute of Advanced Technology & Science</h3>`
     - `<p>School of Computing, AI & Emerging Sciences</p>`
2. **Conference Name & Acronym:**
   - Search & replace `ICACST-2027` with your conference acronym (e.g. `ICETCE-2027`).
3. **Important Dates:**
   - Update dates in `index.html` and `important-dates.html`.
   - Update the countdown timer target in `assets/js/main.js` (line 33):
     ```javascript
     const targetDate = new Date("October 31, 2026 23:59:59 GMT+05:30").getTime();
     ```
4. **Submission Portal Link:**
   - Replace the `https://cmt3.research.microsoft.com` placeholder with your exact Microsoft CMT or EasyChair conference submission URL.
5. **Registration Fees:**
   - Adjust the fee figures in `index.html` and `registration.html` to match your institutional budget.

---

## 🚀 How to View Locally

Simply double-click `index.html` in your file explorer to open it in your browser, or start a local server:

```powershell
# Using Python
python -m http.server 8000
```
Then navigate to `http://localhost:8000` in your web browser.
"# confarence-website" 
