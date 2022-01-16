const FIREBASE_DOMAIN = 'https://react-http-helper-default-rtdb.firebaseio.com';

export async function saveProject(projectData) {
    const response = await fetch(`${FIREBASE_DOMAIN}/projects.json`, {
      method: "POST",
      body: JSON.stringify(projectData), 
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data.message || "Could not save project.");
    }
  
    return projectData;
  }


  export async function getProject(projectId) {
    const response = await fetch(`${FIREBASE_DOMAIN}/projects/${projectId}.json`);
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data.message || "Could not fetch project with id:" + projectId);
    }
  
    const loadedProject = {
      id: projectId,
      ...data,
    };
  
    return loadedProject;
  }


  
export async function getAllProjects() {
    const response = await fetch(`${FIREBASE_DOMAIN}/projects.json`);
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data.message || "Could not fetch users.");
    }
  
    const transformedProjects = [];
  
    for (const key in data) {
      const projectObj = {
        id: key,
        ...data[key],
      };
  
      transformedProjects.push(projectObj);
    }
  
    return transformedProjects;
  }