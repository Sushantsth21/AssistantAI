from fpdf import FPDF

# Function to replace or remove characters not supported by 'latin-1'
def sanitize_text(text):
    return text.encode('latin-1', 'replace').decode('latin-1')

# Your input text
text = """
Sand Volleyball Complex Reservation Eligibility

Student organizations must be registered with the Office of Student Engagement and/or Greek Life to gain facility reservation privileges.
NKU administrative departments must be officially recognized by the university to gain facility reservation privileges.
Groups other than NKU student organizations and departments can rent the facility.
Facility Reservations: Policies & Procedures

All groups interested in reserving the Sand Volleyball Complex must submit a completed Campus Recreation Outdoor Facility Rental Request Form at least (14) fourteen days prior to the requested event date. Forms are available at campusrec.nku.edu. Requests will be processed by the Associate Director for Facilities.
Facility requests need to be submitted using the Outside Facility Rental Form at campusrec.nku.edu. Reservations will be processed in the order in which they were received and prioritized according to the Scheduling Priority Policy. Individuals requesting facilities will be contacted by the Associate Director for Facilities to discuss the facility request. Notification of approval or non-approval of facility reservation requests will be provided in writing. Event planning meetings will be required for all events.
The sponsor of the event or reservation is responsible for the actions of all individuals that participate in or attend the event.  All participants shall adhere to the regulations. Failure to adhere to stated policies will immediately terminate the reservation and may result in the loss of future reservation privileges, penalties, fines or disciplinary action. 
Any group approved for reservation of the Sand Volleyball Complex will be responsible for returning the space to its pre-event condition.
Picking up and removing all trash and/or unwanted items to trash cans
Separating recyclable items and placing in appropriate recycle containers
Returning equipment to original location
Restacking any borrowed tables/chairs and returning to a specified location
Scheduling Priority Policy

Campus Recreation programs and academic classes
Officially recognized student organizations
University departments
Facility rentals by other groups
*Open recreation times will be made available each semester. See campusrec.nku.edu website for days and times.

Rental Fees

NKU departments or officially recognized student organizations are not assessed a rental fee to reserve the Sand Volleyball Courts for any reservation in which all participants are currently enrolled NKU students, faculty and staff.

For information on Rental Fee Schedule, see below.

Insurance Policy

Rental groups are required to provide the university with a comprehensive liability insurance policy with NKU named as the insured in the following instances:

All facility rentals by groups other than NKU students and departments.
NKU student group or department events with participants other than NKU students, faculty/staff.
The insurance policy needs to be for $1 million dollars of coverage. Affordable short term liability insurance policies for events can be obtained utilizing the following website:

https://tulip.ajgrms.com/

Proof of insurance is required at least 2 weeks prior to the event date.

Cancellation Policy

The sponsor of the reservation shall use the facility at the scheduled time or properly cancel the reservation.  The following cancellation policies apply to all groups including student organizations.

All cancellations other than for weather need to be made in writing at least 14 days prior to the reservation date to avoid penalties.   
Failure to properly cancel the reservation or “no shows” will result in loss of rental fees and will affect future reservation privileges.

Music Policy

Groups or individuals are not permitted to bring or play their own music devices without prior approval.

Banner Policy

The following policy is designed to allow recognized student organizations, and administrative and academic departments to properly hang banners for sponsored activities or Northern Kentucky University related functions to be conducted at the Sand Volleyball Courts. All banners must have approval of the NKU Campus Recreation Department. All banners must adhere to the following rules and regulations to be displayed:

Banner must be given to the Campus Recreation Department at least two days prior to reservation in order to approve the banner.
Banner must include the name of the sponsoring recognized student organization or University department.
The student organization or University department’s logo must be most prominent on the banner if other sponsor logos are on the banner.
Banners must measure no more than 8 feet long by 4 feet high with grommets on each corner of the banner to assist in the hanging of the banner.
Banners must be of professional quality. Banners may be made of vinyl or canvas.  Hand-painted canvas banners and sheets are unacceptable.
Banners maybe hung during event time frame only.
Banners will be removed by Campus Rec staff at the conclusion of the reservation.
Campus Recreation is not responsible for lost or damaged banners.
"""

# Create instance of FPDF
pdf = FPDF()
pdf.add_page()

# Sanitize the text
clean_text = sanitize_text(text)

# Add text to the PDF
pdf.set_font("Arial", size=12)
pdf.multi_cell(0, 10, clean_text)

# Output PDF
pdf_file_path = "output.pdf"
pdf.output(pdf_file_path)

print(f"PDF created successfully: {pdf_file_path}")
