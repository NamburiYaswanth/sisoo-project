import "./project.css"
const UpcomingTrainings = () => {
    const trainings = [
      { title: 'UI Developer', topics: 'Java, Python, C++, C sharp' },
      { title: 'UI Designer', topics: 'Java, Python, C++, C sharp' },
      { title: 'Full Stack Developer', topics: 'Java, Python, C++, C sharp' },
      { title: 'UI Developer', topics: 'Java, Python, C++, C sharp' },
      { title: 'UI Designer', topics: 'Java, Python, C++, C sharp' },
      { title: 'UI Designer', topics: 'Java, Python, C++, C sharp' },
      { title: 'UI Designer', topics: 'Java, Python, C++, C sharp' },
      { title: 'UI Designer', topics: 'Java, Python, C++, C sharp' },
      { title: 'UI Designer', topics: 'Java, Python, C++, C sharp' },
      { title: 'UI Designer', topics: 'Java, Python, C++, C sharp' },
      { title: 'UI Designer', topics: 'Java, Python, C++, C sharp' },
      { title: 'UI Designer', topics: 'Java, Python, C++, C sharp' },

  
    ];
  
    return (
      <div className="trainings-container">
        <header className="header">
          <h1>Upcoming Trainings <spam className="number">{trainings.length}</spam></h1>
        </header>
        <div className="trainings-list">
          {trainings.map((training, index) => (
            <div key={index} className="training-card">
              <h3>Name of training</h3>
              <p>{training.title}</p>
              <h4>Topics & Trainings</h4>
              <p>{training.topics}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default UpcomingTrainings;