function languages(country) {
    switch (country) {
        case "England":
        case "USA":
            return "English";

        case "Spain":
        case "Argentina":
        case "Mexico":
            return "Spanish";

        default:
            return "unknown";
    }
}
