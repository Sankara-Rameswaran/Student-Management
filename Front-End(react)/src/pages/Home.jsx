function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 flex items-center justify-center px-6">
      <div className="max-w-4xl bg-white shadow-2xl rounded-2xl p-10 border border-gray-100">

        <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">
          Student Management System
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          This project is a full-stack Student Management System developed to 
          understand and implement real-world CRUD operations using modern technologies.
          The backend is built using <span className="font-semibold text-blue-600">Spring Boot</span> 
          and <span className="font-semibold text-blue-600">Spring Data JPA</span> 
          following the MVC architecture pattern.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Through this project, I explored how JPA simplifies database operations 
          by mapping Java objects to relational tables and how Spring Boot 
          helps in building RESTful APIs efficiently with minimal configuration.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          The frontend is developed using <span className="font-semibold text-blue-600">ReactJS</span>, 
          where I applied important concepts such as:
        </p>

        <ul className="list-disc list-inside text-gray-700 text-lg space-y-2 mb-6">
          <li>Component-based architecture</li>
          <li>React Hooks (useState, useEffect)</li>
          <li>Axios for API communication</li>
          <li>React Router DOM for navigation</li>
          <li>Dynamic routing with parameters</li>
        </ul>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          For styling and responsive UI design, I used 
          <span className="font-semibold text-blue-600"> Tailwind CSS</span> 
          to create a modern, clean, and responsive interface.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed">
          This project helped me understand the complete integration between 
          frontend and backend, REST API handling, state management, and 
          database interaction — making it a strong foundation for building 
          scalable full-stack applications.
        </p>

      </div>
    </div>
  );
}

export default Home;
