const resources = [
    {
        id: 1,
        title: "Password Reset Guide",
        category: "IT Services",
        audience: ["Students", "Faculty", "Staff"],
        description: "Instructions for resetting university account passwords and recovering access.",
        url: "/password-reset",
        content: [
            "Visit the university account portal.",
            "Select the Forgot Password option.",
            "Verify your identity using the required information.",
            "Create and confirm your new password."
        ]
    },
    {
        id: 2,
        title: "Library Database Access",
        category: "Library",
        audience: ["Students", "Faculty"],
        description: "Access online library databases, journals, and academic research resources.",
        url: "/library-access",
        content: [
            "Visit the university library website.",
            "Sign in using your university credentials.",
            "Select the database, journal, or research resource you need.",
            "Contact the library for assistance if you have trouble accessing a resource."
        ]
    },
    {
        id: 3,
        title: "Campus Tour Information",
        category: "Admissions",
        audience: ["Visitors"],
        description: "Information about campus tours, visitor services, and admissions resources.",
        url : "/campus-guide",
        content: [
            "Review the available campus tour dates and times.",
            "Register for a tour through the admissions office.",
            "Arrive at the designated visitor check-in location before your tour.",
            "Contact admissions if you need assistance with scheduling or accessibility."
        ]
    },
    {
        id: 4,
        title: "Academic Advising Resources",
        category: "Academic Resources",
        audience: ["Students"],
        description: "Guidance and support resources for academic planning and student success.",
        url: "/academic-advising",
        content: [
            "Review your current academic requirements and degree plan.",
            "Schedule an appointment with your academic advisor.",
            "Prepare questions about courses, degree requirements, and academic goals.",
            "Follow up with your advisor if additional academic support is needed."
        ]
    },
    {
        id: 5,
        title: "Employee Software Request Form",
        category: "IT Services",
        audience: ["Faculty", "Staff"],
        description: "Submit requests for approved software and technology needed for university work.",
        url: "/employee-request",
        content: [
            "Review the software you need for your university work.",
            "Confirm that the software is approved for university use.",
            "Submit the software request form with the required information.",
            "Wait for the request to be reviewed and approved before installing the software."
        ]
    },
    {
        id: 6,
        title: "Student Parking Information",
        category: "Campus Services",
        audience: ["Students"],
        description: "Information about parking permits, regulations, and available campus parking.",
        url: "/student-parking",
        content: [
            "Review campus parking regulations and permit requirements.",
            "Apply for a student parking permit if one is required.",
            "Park only in areas designated for your permit.",
            "Review campus parking maps and restrictions before parking."
        ]
    }
]

export default resources;