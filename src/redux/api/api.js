import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const fetchRocket = createAsyncThunk(
    'rockets/fetchRocket',
    async () => {}
)
const API = {
  fetchRockets: async () => {
    const res = await fetch(`${url}`);
    const data = await res.json();
    // const rockets = data.map(
    //   ({
    //     rocket_id: rocketId,
    //     rocket_name: rocketName,
    //     description: rocketType,
    //     flickr_images: rocketImages,
    //   }) => {
    //     const rocketImage = rocketImages[0];
    //     return {
    //       rocketId,
    //       rocketName,
    //       rocketType,
    //       rocketImage,
    //     };
    //   },
    // );
    // return rockets;
  },
};

export default API;
{
        rocket_id: rocketId,
        rocket_name: rocketName,
        description: rocketType,
        flickr_images: rocketImages,
      }