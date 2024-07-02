"use strict";
exports.__esModule = true;
// src/components/Skill.tsx
var react_1 = require("react");
require("./skills.css"); // Import CSS for styling
var Skill = function (_a) {
    var skill = _a.skill, level = _a.level;
    var _b = react_1.useState(false), animated = _b[0], setAnimated = _b[1];
    var progressBarRef = react_1.useRef(null);
    react_1.useEffect(function () {
        var progressBarElement = progressBarRef.current;
        var handleScroll = function () {
            if (progressBarElement) {
                var top = progressBarElement.getBoundingClientRect().top;
                var windowHeight = window.innerHeight;
                if (top < windowHeight) {
                    setAnimated(true);
                }
            }
        };
        // Add event listener to listen for scroll events
        window.addEventListener("scroll", handleScroll);
        // Cleanup function to remove event listener
        return function () {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    // Calculate width of progress bar based on level
    var progressBarStyle = {
        width: animated ? level + "%" : "0%",
        boxShadow: "0px 0px 30px red"
    };
    return (react_1["default"].createElement("div", { className: "skill" },
        react_1["default"].createElement("div", { className: "skill-name" }, skill),
        react_1["default"].createElement("div", { className: "progress-bar", ref: progressBarRef },
            react_1["default"].createElement("div", { 
                // className={`glow`}
                style: {
                    width: animated ? level + "%" : "0%",
                    boxShadow: "0px 0px 30px red",
                    height: "10px",
                    transition: "width 3s ease-in-out",
                    backgroundColor: "#61dafb"
                } }))));
};
exports["default"] = Skill;
