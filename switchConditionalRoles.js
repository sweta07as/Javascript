var user="admin";

// Fallthrough happens when break statements are not present in the cases of switch.
switch (user) {
    case "admin":
        console.log("you get full access");
        break;
    case "subadmin":
        console.log("gets access to create/delete courses");
        break;
    case "testprep":
        console.log("gets access to create/delete tests");
        break;
    case "user":
        console.log("gets access to consume content");
        break;
    default:
        console.log("Trial user");
        break;
}