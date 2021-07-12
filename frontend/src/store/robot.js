import {createSlice} from "@reduxjs/toolkit";
import {apiCallBegin} from "./api";

const robot = createSlice({
    name: "robot",
    initialState: {
        isLoading: false,
        toast: {isOpen: false, type: "error", message: "Error"},
        list: [],
    },
    reducers: {
        robotRequested: (robot) => {
            robot.isLoading = true;
        },
        robotReceived: (robot, action) => {
            const data = action.payload.data;
            const material = String(action.data?.filter?.material).toLowerCase();

            if (material) {
                robot.list = data.filter((item) => {
                    const cardMaterial = String(item.material).toLowerCase();
                    return cardMaterial.includes(material);
                });
            } else {
                robot.list = data;
            }

            robot.isLoading = false;
        },
        robotRequestFailed: (robot, action) => {
            robot.isLoading = false;
        },
    },
});

export const {robotRequested, robotReceived, robotRequestFailed, closeToast} =
    robot.actions;

export default robot.reducer;

export const loadRobot = (filter) =>
    apiCallBegin({
        url: "/robots",
        method: "get",
        data: {filter},
        onStart: robotRequested.type,
        onSuccess: robotReceived.type,
        onError: robotRequestFailed.type,
    });
