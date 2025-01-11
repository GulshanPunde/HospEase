const departments = [
  {
    name: "Cardiology",
    headDoctor: {
      name: "Dr. John Smith",
      specialization: "Cardiologist",
      photo: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    totalBeds: 50,
    occupiedBeds: 35,
    availableBeds: 15,
    description: "The Cardiology department specializes in the diagnosis and treatment of heart diseases. Equipped with state-of-the-art technology and highly experienced professionals, we provide comprehensive care for cardiovascular conditions.",
  },
  {
    name: "Neurology",
    headDoctor: {
      name: "Dr. Sarah Lee",
      specialization: "Neurologist",
      photo: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    totalBeds: 40,
    occupiedBeds: 28,
    availableBeds: 12,
    description: "The Neurology department focuses on disorders of the nervous system, including the brain, spinal cord, and peripheral nerves. Our team is dedicated to providing advanced treatments and rehabilitation for neurological conditions.",
  },
  {
    name: "Orthopedics",
    headDoctor: {
      name: "Dr. Angela White",
      specialization: "Orthopedic Surgeon",
      photo: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    totalBeds: 45,
    occupiedBeds: 30,
    availableBeds: 15,
    description: "The Orthopedics department offers comprehensive care for musculoskeletal injuries and disorders. Our services include joint replacements, sports injury treatments, and pediatric orthopedics.",
  },
  {
    name: "Pediatrics",
    headDoctor: {
      name: "Dr. Emily Carter",
      specialization: "Pediatrician",
      photo: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    totalBeds: 35,
    occupiedBeds: 25,
    availableBeds: 10,
    description: "The Pediatrics department provides specialized care for infants, children, and adolescents. From routine checkups to complex medical conditions, we ensure the best possible care for young patients.",
  },
  {
    name: "Oncology",
    headDoctor: {
      name: "Dr. James Brown",
      specialization: "Oncologist",
      photo: "https://randomuser.me/api/portraits/men/7.jpg",
    },
    totalBeds: 50,
    occupiedBeds: 40,
    availableBeds: 10,
    description: "The Oncology department offers comprehensive cancer care, including chemotherapy, radiation therapy, and supportive services. Our goal is to provide personalized care and improve the quality of life for our patients.",
  },
  {
    name: "Dermatology",  // New department
    headDoctor: {
      name: "Dr. Rachel Adams",
      specialization: "Dermatologist",
      photo: "https://randomuser.me/api/portraits/women/8.jpg",
    },
    totalBeds: 30,
    occupiedBeds: 20,
    availableBeds: 10,
    description: "The Dermatology department specializes in the diagnosis and treatment of skin conditions. Our team provides cutting-edge treatments for conditions like acne, eczema, and psoriasis.",
  },
  {
    name: "Gastroenterology",  // New department
    headDoctor: {
      name: "Dr. Michael Clark",
      specialization: "Gastroenterologist",
      photo: "https://randomuser.me/api/portraits/men/9.jpg",
    },
    totalBeds: 40,
    occupiedBeds: 30,
    availableBeds: 10,
    description: "The Gastroenterology department specializes in disorders of the digestive system, providing advanced diagnostic and therapeutic procedures for gastrointestinal conditions.",
  }
];

export default departments;
