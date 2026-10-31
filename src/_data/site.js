/* =====================================================================
   SITE DATA — the ONLY file you edit for routine updates.

   - Add a publication:  copy an object in `writings`
   - Add a presentation: copy an object in `presentations`
   - Add a CV entry:     copy an object inside `cv.sections[].entries`
   Then run `npm run build` and deploy _site/.

   PRIVACY NOTE: no email address is stored or displayed anywhere on
   this site. If you want a contact method on the Contact page, set
   `contactNote` below (plain text or a short HTML snippet).
   ===================================================================== */
module.exports = {
  year: new Date().getFullYear(),

  location: "Helena, Montana",

  // Optional text shown on the Contact page. Leave "" to hide.
  // Examples:
  //   "I can be reached through the Lewis & Clark Library."
  //   "Connect with me on LinkedIn: <a href='...'>...</a>"
  contactNote: "",

  bio: "Matthew Beckstrom is a systems and technology manager, librarian, author, professor, privacy and security specialist, educator, and researcher with interests in technology, data management, libraries, education, privacy, security, intellectual freedom, information science, cybersecurity, and management.",
  badges: ["Libraries", "Privacy", "Security", "Intellectual Freedom", "Education", "Cybersecurity", "Management"],

  writings: [
    { year: 2022, authors: "Lund, B.D., & Beckstrom, M.A.",
      title: "A Guide to Using the Anonymous Web in Libraries and Information Organizations: Enhancing Patron Privacy and Information Access",
      detail: "Co-author. London, UK: Routledge.", url: "" },
    { year: 2022, authors: "Valenti, S.J., Lund, B.D., & Beckstrom, M.A.",
      title: "Library Patrons Privacy: Questions and Answers",
      detail: "Santa Barbara, CA: ABC-Clio/Libraries Unlimited.", url: "" },
    { year: 2021, authors: "Brady Lund & Matt Beckstrom",
      title: "The Integration of Tor into Library Services: An Appeal to the Core Mission and Values of Libraries",
      detail: "Public Library Quarterly, 40:1, 60–76.", url: "https://doi.org/10.1080/01616846.2019.1696078" },
    { year: 2019, authors: "Marden, W., Griffey, J., Berman, E., Houghton, S., West, J., Hellman, E., Lamanna, T.J., & Beckstrom, M.",
      title: "Choose Privacy Week 2018: Big Data is Watching You",
      detail: "Journal of Intellectual Freedom & Privacy, 4:1.", url: "https://doi.org/10.5860/jifp.v4i1.6885" },
    { year: 2019, authors: "Beckstrom, M.",
      title: "Casting Light on the Dark Web: A Guide for Safe Exploration",
      detail: "Co-author. Rowman & Littlefield.", url: "" },
    { year: 2017, authors: "Beckstrom, M.",
      title: "Protecting Patron Privacy: A LITA Guide",
      detail: "Contributor. Rowman & Littlefield.", url: "" },
    { year: 2016, authors: "Beckstrom, M.",
      title: "LITA Privacy Checklists",
      detail: "Library and Information Technology Association.", url: "" },
    { year: 2015, authors: "Beckstrom, M.",
      title: "Protecting Patron Privacy: Safe Practices for Public Computers",
      detail: "Libraries Unlimited.", url: "" }
  ],

  presentations: [
    { year: 2025, title: "The First Amendment and Library", venue: "Niche Academy webinar", month: "April" },
    { year: 2024, title: "Legal Issues Confronting Montana Libraries", venue: "Montana Library Association Fall Retreat", month: "October", co: "Co-presenter" },
    { year: 2024, title: "Law for Librarians", venue: "Montana Library Association Fall Retreat", month: "October" },
    { year: 2024, title: "First Amendment in Libraries", venue: "Lewis & Clark Library staff training", month: "July" },
    { year: 2024, title: "Governing Laws and Policies for Libraries", venue: "Lewis & Clark Library staff training", month: "May" },
    { year: 2023, title: "Intellectual Freedom and Book Challenges", venue: "Montana Library Association Annual Conference", month: "April" },
    { year: 2023, title: "Privacy Audits for Public Libraries", venue: "Niche Academy webinar", month: "February", co: "Co-presenter" },
    { year: 2022, title: "Preparing for Ransomware", venue: "Montana Library Association Fall Retreat", month: "October" },
    { year: 2022, title: "Library Patrons' Privacy: How to Navigate Concerns with Emerging Technology", venue: "Niche Academy webinar", month: "April" },
    { year: 2022, title: "Intellectual Freedom: Taking Action", venue: "Montana Academic Symposium", month: "May" },
    { year: 2019, title: "Casting Light on the Dark Web", venue: "American Library Association Annual Conference", month: "June" },
    { year: 2019, title: "Performing the Reference Interview", venue: "Lewis & Clark Library", month: "March" },
    { year: 2018, title: "Adopting Encryption Technologies", venue: "Library and Information Technology Association Webinar", month: "April" },
    { year: 2018, title: "Privacy Update", venue: "Montana Library Association Annual Conference", month: "April" },
    { year: 2018, title: "Providing Unique Collections", venue: "Montana Library Association Annual Conference", month: "April" },
    { year: 2017, title: "Internet Service Providers and Copyright Issues for Libraries", venue: "Online Webinar", month: "April" },
    { year: 2017, title: "Implementing Internet Security", venue: "Montana Library Association Annual Conference", month: "May" },
    { year: 2017, title: "Montana Library Association Intellectual Freedom Committee Forum", venue: "MLA Annual Conference", month: "April" },
    { year: 2016, title: "Implementing Internet Security", venue: "Montana Library Association Fall Retreat", month: "October" },
    { year: 2016, title: "Protecting Patron Privacy", venue: "Montana Library Association Annual Conference", month: "April" },
    { year: 2016, title: "Implementing SSL", venue: "V-Users Annual Conference", month: "April" },
    { year: 2015, title: "3D Printing in the Library", venue: "Montana Library Association Fall Retreat", month: "October" },
    { year: 2015, title: "Protecting Patron Privacy", venue: "Montana Library Association Fall Retreat", month: "October" },
    { year: 2015, title: "Protecting Yourself on the Internet", venue: "Broad Valleys Federation Annual Retreat", month: "February" },
    { year: 2014, title: "Librarians as Censors? The Latest in Internet Filtering", venue: "Pacific Northwest Library Association Annual Conference", month: "August" },
    { year: 2014, title: "Protecting Your Privacy Online", venue: "Pacific Northwest Library Association Annual Conference", month: "August" },
    { year: 2014, title: "How to Protect Your Privacy Online", venue: "Montana ACLU Presentation", month: "November" },
    { year: 2014, title: "Protecting Your Privacy Online", venue: "Montana Library Association Annual Conference", month: "April" },
    { year: 2014, title: "Strategic Planning", venue: "Montana Library Association Fall Retreat", month: "October", co: "Facilitator" },
    { year: 2014, title: "Protecting Your Privacy Online", venue: "MLA Offline Interest Group Conference", month: "February" },
    { year: 2013, title: "Internet Filtering in the Age of CIPA", venue: "MEA/MFT Annual Conference", month: "October" },
    { year: 2013, title: "Risk, Reward, and Reinvention: Keeping Libraries Relevant in the Age of Innovation", venue: "Montana Library Association Annual Conference", month: "April" },
    { year: 2013, title: "Librarians as Censors? Latest Developments in Internet Filtering", venue: "Montana Library Association Annual Conference", month: "April" },
    { year: 2012, title: "Using Drupal at Your Library", venue: "Montana Library Association Fall Retreat", month: "October" },
    { year: 2012, title: "Installing and Configuring Drupal for Libraries", venue: "Montana Library Association Annual Conference", month: "April" },
    { year: 2012, title: "Technology Trends", venue: "MLA Offline Interest Group Conference", month: "February" },
    { year: 2011, title: "How to Stay Tech Savvy", venue: "Montana Library Association Fall Retreat", month: "October" },
    { year: 2011, title: "How to Stay Tech Savvy", venue: "Broad Valleys Federation Annual Retreat", month: "March" },
    { year: 2010, title: "Social Media in the Library", venue: "MLA Offline Interest Group Conference", month: "February" },
    { year: 2010, title: "Social Media Policy and Planning", venue: "Montana Library Association Fall Retreat", month: "October" },
    { year: 2010, title: "Social Media Policy and Planning", venue: "Broad Valleys Federation Annual Retreat", month: "March" },
    { year: 2009, title: "Creating a Successful Technology Training Program", venue: "Montana Library Association Annual Conference", month: "April" },
    { year: 2009, title: "What's New in Open Source", venue: "MLA Offline Interest Group Conference", month: "February" },
    { year: 2009, title: "Digital Cameras & Photography", venue: "Montana Library Association Fall Retreat", month: "October" },
    { year: 2009, title: "Using Tech Atlas", venue: "Montana Library Association Annual Conference", month: "April" }
  ],

  teaching: {
    role: "Adjunct Professor",
    place: "Helena College of the University of Montana",
    years: "2012 – Present",
    courses: [
      "Introduction to Computer Programming",
      "Introduction to Linux",
      "Computer Networking",
      "Networking Fundamentals",
      "Network Security",
      "Microsoft Office",
      "Advanced Excel & Word",
      "Introduction to Computer Modeling",
      "Web Design"
    ]
  },

  cv: {
    sections: [
      {
        heading: "Professional Experience",
        entries: [
          {
            role: "Acting Director",
            org: "Lewis & Clark Library",
            when: "2022 – Present",
            points: [
              "Work with library board of trustees and Foundation to develop and implement budget, policies, and procedures",
              "Provide leadership to library management team and supervise up to 50 library staff",
              "Interface with community, state, and federal organizations to promote libraries and library services"
            ]
          },
          {
            role: "Systems Librarian",
            org: "Lewis & Clark Library",
            when: "2012 – Present",
            points: [
              "Member of library management team; develop policies, procedures, and decisions for the entire library",
              "Develop short and long-term strategic planning for the library and Systems department",
              "Manage wide-area and local-area networks including all workstations, networking equipment, and devices",
              "Administer technology security for entire library system including threat management, training, and preventative measures",
              "Support and manage remote and mobile staff; oversee web-based applications, social media, and online databases"
            ]
          },
          {
            role: "Network Services Manager",
            org: "Lewis & Clark Library",
            when: "1999 – 2012",
            points: [
              "Managed all technology devices for entire library system including workstations, VOIP phone system, and networking equipment",
              "Managed all library online services including social media, website, and databases",
              "Provided structured training and classes to library staff and patrons"
            ]
          }
        ]
      },
      {
        heading: "Education",
        entries: [
          {
            role: "Master's in Information Science",
            org: "University of North Texas",
            when: "2012",
            points: [
              "Graduate academic certificate in Information Agency Management",
              "Graduate academic certificate in Digital Content Management"
            ]
          },
          {
            role: "Bachelor of Applied Science",
            org: "Montana State University Billings",
            when: "2010",
            points: ["Emphasis on Information Technology"]
          }
        ]
      },
      {
        heading: "Teaching Experience",
        entries: [
          {
            role: "Adjunct Professor",
            org: "Helena College of the University of Montana",
            when: "2012 – Present",
            points: ["Courses taught: Introduction to Computer Programming, Linux, Computer Networking, Network Security, Microsoft Office, Advanced Excel/Word, Computer Modeling, Web Design"]
          }
        ]
      },
      {
        heading: "Professional Activities",
        entries: [
          { role: "Member – Intellectual Freedom Committee", org: "American Library Association", when: "2025 – 2028" },
          { role: "Webmaster", org: "Montana Library Association", when: "2022 – 2024" },
          { role: "Board Member", org: "ACLU Montana", when: "2016 – 2020" },
          { role: "Board Member – American Library Representative", org: "Montana Library Association", when: "2016 – 2025" },
          { role: "Member – Montana Shared Catalog Executive Committee", org: "Montana Shared Catalog", when: "2018 – 2022" },
          { role: "Committee Chair", org: "ALA Conference Committee", when: "" },
          { role: "Committee Chair – Intellectual Freedom Committee", org: "Montana Library Association", when: "" },
          { role: "Council Member", org: "American Library Association", when: "2013 – 2025" },
          { role: "LITA Liaison to the ALA Intellectual Freedom Committee", org: "Library and Information Technology Association", when: "" },
          { role: "Member-At-Large", org: "Montana State Library Network Advisory Council", when: "" },
          { role: "Past-President", org: "V-Users Users Group", when: "" }
        ]
      },
      {
        heading: "Memberships",
        entries: [
          { role: "", org: "American Library Association", when: "" },
          { role: "", org: "Public Library Association", when: "" },
          { role: "", org: "Library & Information Technology Association", when: "" },
          { role: "", org: "Montana Library Association", when: "" },
          { role: "", org: "American Civil Liberties Union of Montana", when: "" }
        ]
      },
      {
        heading: "Awards & Grants",
        entries: [
          { role: "SWIM Montana Library School Scholarship", org: "Montana State Library", when: "2011" },
          { role: "Law 4 Librarians Training Grant", org: "American Library Association", when: "2024" }
        ]
      },
      {
        heading: "Skills & Expertise",
        entries: [
          { role: "Post-secondary Education", org: "", when: "",
            points: ["Course design, student support, facilitating discussion, online learning management systems (Canvas, Moodle, LibGuides)"] },
          { role: "Computing Technology", org: "", when: "",
            points: ["Windows and Linux environments, workstations, servers, network infrastructure"] },
          { role: "Network Technologies", org: "", when: "",
            points: ["DNS, IP addressing/subnetting, VLANs, virtualized systems, WAN, firewalls, routers, switches"] },
          { role: "Cloud Infrastructure", org: "", when: "",
            points: ["Microsoft 365, AWS, online databases, identity management, SharePoint, Teams"] },
          { role: "Security", org: "", when: "",
            points: ["Cybersecurity planning, disaster recovery, log analysis, packet capture, ethical hacking"] },
          { role: "Programming & Scripting", org: "", when: "",
            points: ["C, C++, C#, Visual Basic, MySQL, PHP, SQL, Java, Bash"] },
          { role: "Leadership & Management", org: "", when: "",
            points: ["Budgeting, policy development, strategic planning, project management, supervisory experience"] }
        ]
      }
    ]
  }
};
