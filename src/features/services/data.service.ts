import axios from "axios";

class PotsService {
  private URL = "http://94.131.246.109:5555/v1/2";

  getUser() {
    return axios.get(`${this.URL}/Schoolboy`);
  }
  getColumn() {
    return axios.get(`${this.URL}/Column`);
  }
  getAttendance(schoolboyId: any) {
    return axios.get(`${this.URL}/Rate`, {
      params: { SchoolboyId: schoolboyId },
    });
  }
  markAbsence(schoolboyId: number, columnId: number) {
    const payload = {
      SchoolboyId: schoolboyId,
      ColumnId: columnId,
      Title: "Н",
    };
    return axios.post(`${this.URL}/Rate`, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  removeAbsence(schoolboyId: number, columnId: number) {
    const payload = {
      SchoolboyId: schoolboyId,
      ColumnId: columnId,
    };
    return axios.post(`${this.URL}/UnRate`, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

export const postService = new PotsService();
