import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchProjects() {

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchProjects = async () => {
      try {

        const res = await axios.get(
          "http://localhost:5000/api/projects"
        );

        setProjects(res.data);

      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();

  }, []);

  return { projects, loading };
}