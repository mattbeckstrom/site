/* =====================================================================
   SITE DATA — this is the ONLY file you edit for routine updates.
   - Add a publication:    copy an object in `writings`
   - Add a presentation:   copy an object in `presentations`
   - Add a CV position:    copy an entry inside cv.sections[].entries
   ===================================================================== */
const DATA = {

  // -------- Home page --------
  bio: "Matthew Beckstrom is a librarian, author, professor, manager, privacy and security specialist, educator, and researcher with interests in libraries, education, privacy, security, intellectual freedom, information science, cybersecurity, technology, and management.",
  badges: ["Libraries","Privacy","Security","Intellectual Freedom","Education","Cybersecurity"],

  // -------- Contact (set your email here) --------
  email: "you@example.com",  // TODO: replace with your email address

  // -------- Publications (newest first) --------
  writings: [
    { year:2022, authors:"Lund, B.D., & Beckstrom, M.A.",
      title:"A Guide to Using the Anonymous Web in Libraries and Information Organizations: Enhancing Patron Privacy and Information Access",
      detail:"Co-author. London, UK: Routledge.", url:"" },
    { year:2022, authors:"Valenti, S.J., Lund, B.D., & Beckstrom, M.A.",
      title:"Library Patrons Privacy: Questions and Answers",
      detail:"Santa Barbara, CA: ABC-Clio/Libraries Unlimited.", url:"" },
    { year:2021, authors:"Brady Lund & Matt Beckstrom",
      title:"The Integration of Tor into Library Services: An Appeal to the Core Mission and Values of Libraries",
      detail:"Public Library Quarterly, 40:1, 60–76.", url:"https://doi.org/10.1080/01616846.2019.1696078" },
    { year:2019, authors:"Marden, W., Griffey, J., Berman, E., Houghton, S., West, J., Hellman, E., Lamanna, T.J., & Beckstrom, M.",
      title:"Choose Privacy Week 2018: Big Data is Watching You",
      detail:"Journal of Intellectual Freedom & Privacy, 4:1.", url:"https://doi.org/10.5860/jifp.v4i1.6885" },
    { year:2019, authors:"Beckstrom, M.",
      title:"Casting Light on the Dark Web: A Guide for Safe Exploration",
      detail:"Co-author. Rowman & Littlefield.", url:"" },
    { year:2017, authors:"Beckstrom, M.",
      title:"Protecting Patron Privacy: A LITA Guide",
      detail:"Contributor. Rowman & Littlefield.", url:"" },
    { year:2016, authors:"Beckstrom, M.",
      title:"LITA Privacy Checklists",
      detail:"Library and Information Technology Association.", url:"" },
    { year:2015, authors:"Beckstrom, M.",
      title:"Protecting Patron Privacy: Safe Practices for Public Computers",
      detail:"Libraries Unlimited.", url:"" }
  ],

  // -------- Presentations (newest first) --------
  presentations: [
    { year:2023, title:"Privacy Audits for Public Libraries", venue:"Niche Academy Online Presentation", month:"February" },
    { year:2022, title:"Preparing for Ransomware", venue:"Montana Library Association Fall Retreat", month:"October" },
    { year:2022, title:"Library Patrons' Privacy: How to Navigate Concerns with Emerging Technology", venue:"Niche Academy Online Presentation", month:"April" },
    { year:2022, title:"Intellectual Freedom: Taking Action", venue:"Montana Academic Symposium", month:"May" },
    { year:2019, title:"Casting Light on the Dark Web", venue:"American Library Association Annual Conference", month:"June" },
    { year:2019, title:"Performing the Reference Interview", venue:"Lewis & Clark Library", month:"March" },
    { year:2018, title:"Adopting Encryption Technologies", venue:"Library and Information Technology Association Webinar", month:"April" },
    { year:2018, title:"Privacy Update", venue:"Montana Library Association Annual Conference", month:"April" },
    { year:2018, title:"Providing Unique Collections", venue:"Montana Library Association Annual Conference", month:"April" },
    { year:2017, title:"Internet Service Providers and Copyright Issues for Libraries", venue:"Online Webinar", month:"April" },
    { year:2017, title:"Implementing Internet Security", venue:"Montana Library Association Annual Conference", month:"May" },
    { year:2017, title:"Montana Library Association Intellectual Freedom Committee Forum", venue:"MLA Annual Conference", month:"April" },
    { year:2016, title:"Implementing Internet Security", venue:"Montana Library Association Fall Retreat", month:"October" },
    { year:2016, title:"Protecting Patron Privacy", venue:"Montana Library Association Annual Conference", month:"April" },
    { year:2016, title:"Implementing SSL", venue:"V-Users Annual Conference", month:"April" },
    { year:2015, title:"3D Printing in the Library", venue:"Montana Library Association Fall Retreat", month:"October" },
    { year:2015, title:"Protecting Patron Privacy", venue:"Montana Library Association Fall Retreat", month:"October" },
    { year:2015, title:"Protecting Yourself on the Internet", venue:"Broadvalleys Federation Annual Retreat", month:"February" },
    { year:2014, title:"Librarians as Censors? The Latest in Internet Filtering", venue:"Pacific Northwest Library Association Annual Conference", month:"August" },
    { year:2014, title:"Protecting Your Privacy Online", venue:"Pacific Northwest Library Association Annual Conference", month:"August" },
    { year:2014, title:"How to Protect Your Privacy Online", venue:"Montana ACLU Presentation", month:"November" },
    { year:2014, title:"Protecting Your Privacy Online", venue:"Montana Library Association Annual Conference", month:"April" },
    { year:2014, title:"Strategic Planning", venue:"Montana Library Association Fall Retreat", month:"October" },
    { year:2014, title:"Protecting Your Privacy Online", venue:"MLA Offline Interest Group Conference", month:"February" },
    { year:2013, title:"Risk, Reward, and Reinvention: Keeping Libraries Relevant in the Age of Innovation", venue:"Montana Library Association Annual Conference", month:"April" },
    { year:2013, title:"Librarians as Censors? Latest Developments in Internet Filtering", venue:"Montana Library Association Annual Conference", month:"April" },
    { year:2013, title:"Internet Filtering in the Age of CIPA", venue:"MEA/MFT Annual Conference", month:"October" },
    { year:2012, title:"Using Drupal at Your Library", venue:"Montana Library Association Fall Retreat", month:"October" },
    { year:2012, title:"Installing and Configuring Drupal for Libraries", venue:"Montana Library Association Annual Conference", month:"April" },
    { year:2012, title:"Technology Trends", venue:"MLA Offline Interest Group Conference", month:"February" },
    { year:2011, title:"How to Stay Tech Savvy", venue:"Montana Library Association Fall Retreat", month:"October" },
    { year:2011, title:"How to Stay Tech Savvy", venue:"Broadvalleys Federation Annual Retreat", month:"March" },
    { year:2010, title:"Social Media in the Library", venue:"MLA Offline Interest Group Conference", month:"February" },
    { year:2010, title:"Social Media Policy and Planning", venue:"Montana Library Association Fall Retreat", month:"October" },
    { year:2010, title:"Social Media Policy and Planning", venue:"Broadvalleys Federation Annual Retreat", month:"March" },
    { year:2009, title:"Creating a Successful Technology Training Program", venue:"Montana Library Association Annual Conference", month:"April" },
    { year:2009, title:"What's New in Open Source", venue:"MLA Offline Interest Group Conference", month:"February" }
  ],

  // -------- Academics --------
  teaching: {
    role: "Adjunct Professor",
    place: "Helena College of the University of Montana",
    address: "1115 North Roberts, Helena, MT 59601",
    years: "2012 – Present",
    courses: [
      "Introduction to Computer Programming","Introduction to Linux","Computer Networking",
      "Network Security","Microsoft Office","Advanced Excel & Word",
      "Introduction to Computer Modeling","Web Design"
    ]
  },

  // -------- CV --------
  /* TODO: Fill in from your current CV — entries marked TODO need your data.
     Copy any entry object to add more positions. */
  cv: {
    sections: [
      {
        heading: "Professional Experience",
        entries: [
          {
            role:"Systems Manager",
            org:"Public Library — Helena, Montana",
            when:"",  // TODO: start year – present
            points:[
              "TODO: bullet points describing responsibilities and accomplishments",
              "TODO: e.g. manage ILS, network infrastructure, patron privacy programs"
            ]
          },
          {
            role:"Adjunct Professor",
            org:"Helena College of the University of Montana",
            when:"2012 – Present",
            points:[
              "Teach courses in programming, Linux, networking, network security, and office technologies",
              "Courses: " + ["Introduction to Computer Programming","Introduction to Linux","Computer Networking","Network Security","Microsoft Office","Advanced Excel & Word","Introduction to Computer Modeling","Web Design"].join(", ")
            ]
          }
          // TODO: add earlier positions the same way
        ]
      },
      {
        heading: "Education",
        entries: [
          {
            role:"TODO: Degree title",
            org:"TODO: Institution",
            when:"",
            points:[]
          }
        ]
      },
      {
        heading: "Service & Committees",
        entries: [
          {
            role:"TODO: committee / leadership roles",
            org:"",
            when:"",
            points:[]
          }
        ]
      }
    ]
  }
};
