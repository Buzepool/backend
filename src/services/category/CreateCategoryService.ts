import prismaClient from "../../prisma";

interface categoryRequest {
  name: string;
}

class CreateCategoryService {
  async execute(name: string) {
    if (name === "") {
      throw new Error("Name incorrect");
    }
    const category = await prismaClient.category.create({
      data: {
        name: name,
      },
      select: {
        id: true,
        name: true,
      },
    });
    return category;
  }
}

export { CreateCategoryService };
