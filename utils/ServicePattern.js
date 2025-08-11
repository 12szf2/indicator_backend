import prisma from "./prisma.js";

export class ServicePattern {
  constructor(serviceName, key, include = {}, select = {}) {
    this.serviceName = serviceName;
    this.key = key;
    this.include = include;
    this.select = select;
    this.serviceCache = new ServiceCache(serviceName);
  }

  async findAll() {
    return await prisma[this.serviceName].findMany({
      include: this.include,
      select: this.select,
    });
  }

  async findAllByYear(year) {
    const firstYear = parseInt(year) - 4;
    const lastYear = firstYear;

    return await prisma[this.serviceName].findMany({
      where: { year: { gte: firstYear, lt: lastYear } },
      include: this.include,
      select: this.select,
    });
  }

  async findById(id) {
    return await prisma[this.serviceName].findUnique({
      where: { [this.key]: id },
      include: this.include,
      select: this.select,
    });
  }

  async findAllByAlapadatok(alapadatokId) {
    return await prisma[this.serviceName].findMany({
      where: { alapadatokId },
      include: this.include,
      select: this.select,
    });
  }

  async findByAlapadatokIdAndYear(alapadatokId, year) {
    const firstYear = parseInt(year) - 4;
    const lastYear = firstYear + 4;

    return await prisma[this.serviceName].findMany({
      where: {
        alapadatokId,
        year: { gte: firstYear, lt: lastYear },
      },
      include: this.include,
      select: this.select,
    });
  }

  async create(data) {
    return await prisma[this.serviceName].create({
      data,
      include: this.include,
      select: this.select,
    });
  }

  async createMany(data) {
    return await prisma[this.serviceName].createMany({
      data,
      include: this.include,
      select: this.select,
    });
  }

  async update(id, data) {
    return await prisma[this.serviceName].update({
      where: { [this.key]: id },
      data,
      include: this.include,
      select: this.select,
    });
  }

  async delete(id) {
    return await prisma[this.serviceName].delete({
      where: { [this.key]: id },
      include: this.include,
      select: this.select,
    });
  }

  async deleteByAlapadatokId(alapadatokId) {
    return await prisma[this.serviceName].deleteMany({
      where: { alapadatokId },
      include: this.include,
      select: this.select,
    });
  }

  async deleteByAlapadatokIdAndYear(alapadatokId, year) {
    const firstYear = parseInt(year) - 4;
    const lastYear = firstYear + 4;

    return await prisma[this.serviceName].deleteMany({
      where: {
        alapadatokId,
        year: { gte: firstYear, lt: lastYear },
      },
      include: this.include,
      select: this.select,
    });
  }
}
