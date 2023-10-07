import React, { useState } from 'react';

function StudentList() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: 'John Doe',
      dob: '1995-05-10',
      gender: 'Male',
      fatherName: 'Mr. Doe',
      motherName: 'Mrs. Doe',
      email: 'john@example.com',
      phoneNumber: '1234567890',
      address: '123 Main St, City',
    },
    {
      id: 2,
      name: 'Jane Smith',
      dob: '1998-02-15',
      gender: 'Female',
      fatherName: 'Mr. Smith',
      motherName: 'Mrs. Smith',
      email: 'jane@example.com',
      phoneNumber: '9876543210',
      address: '456 Elm St, Town',
    },
    {
      id: 3,
      name: 'Sam Johnson',
      dob: '1997-09-20',
      gender: 'Male',
      fatherName: 'Mr. Johnson',
      motherName: 'Mrs. Johnson',
      email: 'sam@example.com',
      phoneNumber: '5551234567',
      address: '789 Oak Rd, Village',
    },
    {
      id: 4,
      name: 'Emily Brown',
      dob: '1996-12-03',
      gender: 'Female',
      fatherName: 'Mr. Brown',
      motherName: 'Mrs. Brown',
      email: 'emily@example.com',
      phoneNumber: '1112223333',
      address: '101 Pine St, Countryside',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [newStudent, setNewStudent] = useState({
    name: '',
    dob: '',
    gender: '',
    fatherName: '',
    motherName: '',
    email: '',
    phoneNumber: '',
    address: '',
  });

  const handleDeleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  const handleAddStudent = () => {
    // Check if any of the required fields are empty
    if (
      newStudent.name === '' ||
      newStudent.dob === '' ||
      newStudent.gender === '' ||
      newStudent.fatherName === '' ||
      newStudent.motherName === '' ||
      newStudent.email === '' ||
      newStudent.phoneNumber === '' ||
      newStudent.address === ''
    ) {
      alert('Please fill in all required fields.');
      return;
    }

    // If all validations pass, add the new student
    const newStudentData = {
      ...newStudent,
      id: students.length + 1,
    };

    setStudents([...students, newStudentData]);
    setNewStudent({
      name: '',
      dob: '',
      gender: '',
      fatherName: '',
      motherName: '',
      email: '',
      phoneNumber: '',
      address: '',
    });
    setShowModal(false);
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-600 py-4 text-white text-center">
        <h1 className="text-2xl font-semibold">Student List</h1>
      </header>
      <div className="container mx-auto p-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
          onClick={toggleModal}
        >
          Add Student
        </button>
        <input
          type="text"
          placeholder="Search by name"
          className="p-2 border rounded w-full mb-4"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <table className="table-auto w-full bg-white shadow">
          <thead>
            <tr>
              <th className="px-2 sm:px-4 py-3">Student</th>
              <th className="px-2 sm:px-4 py-3">Date of Birth</th>
              <th className="px-2 sm:px-4 py-3">Gender</th>
              <th className="px-2 sm:px-4 py-3">Father Name</th>
              <th className="px-2 sm:px-4 py-3">Mother Name</th>
              <th className="px-2 sm:px-4 py-3">Email Id</th>
              <th className="px-2 sm:px-4 py-3">Phone Number</th>
              <th className="px-2 sm:px-4 py-3">Address</th>
              <th className="px-2 sm:px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student.id}>
                <td className="px-2 sm:px-4 py-3 flex items-center">
                  <img
                    src="https://assets.stickpng.com/images/585e4bcdcb11b227491c3396.png"
                    alt="User Icon"
                    className="w-6 h-6 mr-2"
                  />
                  {student.name}
                </td>
                <td className="px-2 sm:px-4 py-3">{student.dob}</td>
                <td className="px-2 sm:px-4 py-3">{student.gender}</td>
                <td className="px-2 sm:px-4 py-3">{student.fatherName}</td>
                <td className="px-2 sm:px-4 py-3">{student.motherName}</td>
                <td className="px-2 sm:px-4 py-3">{student.email}</td>
                <td className="px-2 sm:px-4 py-3">{student.phoneNumber}</td>
                <td className="px-2 sm:px-4 py-3">{student.address}</td>
                <td className="px-2 sm:px-4 py-3">
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleDeleteStudent(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
              className="modal-bg fixed inset-0 bg-black opacity-50"
              onClick={toggleModal}
            ></div>
            <div className="modal-content bg-white p-4 rounded shadow-lg z-10 w-full max-w-sm mx-auto">
              <h2 className="text-xl font-semibold mb-4">Add Student</h2>
              <div className="mb-4">
                <label className="block text-gray-600 font-semibold">
                  Student Name
                </label>
                <input
                  type="text"
                  placeholder="Student Name"
                  className="p-2 border rounded w-full"
                  name="name"
                  value={newStudent.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 font-semibold">
                  Date of Birth
                </label>
                <input
                  type="date"
                  placeholder="Date of Birth"
                  className="p-2 border rounded w-full"
                  name="dob"
                  value={newStudent.dob}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 font-semibold">Gender</label>
                <input
                  type="text"
                  placeholder="Gender"
                  className="p-2 border rounded w-full"
                  name="gender"
                  value={newStudent.gender}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 font-semibold">
                  Father Name
                </label>
                <input
                  type="text"
                  placeholder="Father Name"
                  className="p-2 border rounded w-full"
                  name="fatherName"
                  value={newStudent.fatherName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 font-semibold">
                  Mother Name
                </label>
                <input
                  type="text"
                  placeholder="Mother Name"
                  className="p-2 border rounded w-full"
                  name="motherName"
                  value={newStudent.motherName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 font-semibold">Email Id</label>
                <input
                  type="email"
                  placeholder="Email Id"
                  className="p-2 border rounded w-full"
                  name="email"
                  value={newStudent.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 font-semibold">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="p-2 border rounded w-full"
                  name="phoneNumber"
                  value={newStudent.phoneNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 font-semibold">Address</label>
                <input
                  type="text"
                  placeholder="Address"
                  className="p-2 border rounded w-full"
                  name="address"
                  value={newStudent.address}
                  onChange={handleInputChange}
                />
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleAddStudent}
              >
                Add
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
                onClick={toggleModal}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default StudentList;
