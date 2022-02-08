export function findById(id, animals) {
    return animals.find((item) => item.id === id);
}
//