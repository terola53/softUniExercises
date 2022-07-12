function convertToJson(name, lastName, hairColor) {
    return JSON.stringify({ name, lastName, hairColor });
}
convertToJson('George', 'Jones', 'Brown');