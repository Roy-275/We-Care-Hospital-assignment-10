const consultants = [
    {
        key: 1,
        name: "Prof. Dr. Pran Gopal Datta",
        img: "https://www.doctorshomebd.com/wp-content/uploads/2014/05/Dr.-Pran-Gopal-Datta-Doctors-Home-BD.jpg",
        age: 50
    },
    {
        key: 2,
        name: "Prof. Dr. M.N. Huda",
        img: "https://doctoryouneed.org/wp-content/uploads/2019/09/M.N.-Huda.jpg",
        age: 65
    },
    {
        key: 3,
        name: "Dr. Shamim Boksha",
        img: "https://www.e-healthbd.com/uploads/doctors/1614161008.Shamim%20Baksha.jpg",
        age: 58
    },
    {
        key: 4,
        name: "Dr. Shirin Sharmin Chaudhury",
        img: "http://www.parliament.gov.bd/images/11th_Par_Picture/24-rangpur-6-shirin.jpg",
        age: 53
    },
    {
        key: 5,
        name: "Prof. Dr. Syed Atiqul Haq",
        img: "https://d3p2qewzsoh75c.cloudfront.net/uploads/speakers/200/5d91847fc00bf06bf4c929cb719c293a.jpg",
        age: 42
    },
    {
        key: 6,
        name: "Prof. Dr. Quazi Deen Mohammad",
        img: "https://www.doctorshomebd.com/wp-content/uploads/2014/05/Prof.-Dr.-Quazi-Deen-Mohammed-doctors-home-bd.jpg",
        age: 61
    },
    {
        key: 7,
        name: "Dr. Md. Hasanuzzaman",
        img: "https://researchcooperative.org/profile/image/profile_image/10522/xxlarge/_v=25aeb1600125775",
        age: 38
    },
    {
        key: 8,
        name: "Prof. Dr. Mansurul Alam",
        img: "https://i0.wp.com/parkview.com.bd/wp-content/uploads/2020/10/Prof.-Mansurul-Alam.jpg?fit=600%2C600&ssl=1",
        age: 75
    },
    {
        key: 9,
        name: "Prof. Dr. Mamun Al Mahtab Shwapnil",
        img: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Prof._Dr._Mamun_Al_Mahtab_in_2021.jpg",
        age: 58
    }
];

const technology = [
    {
        key: 1,
        name: "Microscope",
        img: "https://m.media-amazon.com/images/I/71pGc-VDbZL._AC_SL1500_.jpg"
    },
    {
        key: 2,
        name: "Hematology analyzers",
        img: "https://image.made-in-china.com/2f0j00YAJtHaLynSgM/Bk-6310-5-Part-60tests-Hour-Auto-Hematology-Analyzer-with-Printer.jpg"
    },
    {
        key: 3,
        name: "Blood gas analyzers",
        img: "https://image.made-in-china.com/2f0j00AwdQfvLYZVrH/Clinic-Use-Yj-Bg80-Hospital-Equipment-Arterial-Blood-Gas-Analyzer.jpg"
    },
    {
        key: 4,
        name: "Autoclaves",
        img: "https://labassociates.com/wp-content/uploads/2018/03/JP-Selecta-desktop-autoclave-series-960x720.jpg"
    },
    {
        key: 5,
        name: "Hotplates",
        img: "https://www.mrclab.com/Media/Uploads/HP-1.JPG"
    },
    {
        key: 6,
        name: "Histology and cytology equipment",
        img: "https://image.made-in-china.com/202f0j00EdHakzBRajuq/Biobase-Histology-Pathology-Lab-Automated-Tissue-Processor.jpg",
        age: 61
    }
];

const services = [
    {
        key: 1,
        name: "24-Hour Emergency Care",
        image: "https://www.trinitytwincity.org/upload/images/pages/EmergencyServices2.png",
        shortDetails: "The Emergency Services Department is located in the newest emergency facility in the region and features two large trauma rooms; an ear, nose, and eye treatment area; and private rooms for patient confidentiality. The staff can treat many different medical or accidental conditions, and stabilize the most severe cases for transfer to specialty centers."
    },
    {
        key: 2,
        name: "Diabetes Wellness Services",
        image: "https://www.trinitytwincity.org/upload/images/pages/Health_Services/blood_glucose_testing.jpg",
        shortDetails: "Help is available for those who have diabetes. We care Hospital offers diabetes wellness services for individuals who are newly diagnosed with diabetes or those who have had diabetes and need an update on controlling diabetes. Support persons such as family and friends are encouraged to attend. Individual and group sessions are made possible in part thanks to a grant from the U.S. Health Resources & Services Administration Office of Rural Health Policy"
    },
    {
        key: 3,
        name: "Health Education & Outreach Services",
        image: "https://www.trinitytwincity.org/upload/images/pages/HealthEducation.png",
        shortDetails: "Educational speakers from We care hospital can be scheduled to conduct a complimentary presentation at your business, school or civic club meeting. Additionally, We care hospital hosts several free educational one- hour mini seminars on health topics throughout each year.Check our events listing for any upcoming mini seminars."
    },
    {
        key: 4,
        name: "Imaging & X-Ray Services",
        image: "https://www.trinitytwincity.org/upload/images/pages/Imaging/Regular%20xray%20sept%202012%20Web.jpg",
        shortDetails: "Our Imaging Services Department partners with expert radiologists from Steuben Radiology Associates to read and interpret images. Every Steuben radiologist is board certified and experienced in multiple forms of imaging modalities. The group provides coverage of the hospital???s imaging department 24 hours a day, 365 days a year, and the hospital is able to work with radiologists with different specialties in order to ensure the timely, accurate interpretations necessary to deliver high quality patient care."
    },
    {
        key: 5,
        name: "Infusion Clinic Services",
        image: "https://www.trinitytwincity.org/upload/images/pages/Infusion-Clinic-Photo.jpg",
        shortDetails: "Our team of skilled and compassionate nurses and pharmacists works with your medical provider to treat your medical conditions and deliver exceptional care close to home. We also work with you insurance carrier to ensure that your treatments will be covered."
    },
    {
        key: 6,
        name: "Lab & Blood Draw Services",
        image: "https://www.trinitytwincity.org/upload/images/pages/trinity-web-16_copy.jpg",
        shortDetails: "Diagnostic laboratory testing plays a crucial role in the detection, diagnosis, prognosis and treatment of disease and aid the ordering physician in monitoring the treatment and maintenance of their patients. All patients are required to have a doctor or medical provider???s order to perform lab work. It is not required for the provider to be affiliated with We care hospital. Correct diagnostic and therapeutic decisions rely on timely and accurate laboratory testing. We work closely with your medical provider to assure the best patient care. Results are reported directly to your physician/provider."
    },
]