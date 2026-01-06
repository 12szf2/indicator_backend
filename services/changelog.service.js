import { ServicePattern } from "../utils/ServicePattern.js";

const pattern = new ServicePattern(
    "changelog",
    "id",
    {},
    {},
    {
        orderBy: { date: "desc" },
    }
);

export const getAll = async () => {
    return await pattern.findAll();
};

export const create = async (data) => {
    const preparedData = {
        ...data,
        date: new Date(data.date),
    };
    return await pattern.create(preparedData);
};

export const update = async (id, data) => {
    const preparedData = {
        ...data,
        date: data.date ? new Date(data.date) : undefined,
    };
    return await pattern.update(id, preparedData);
};

export const remove = async (id) => {
    return await pattern.delete(id);
};
