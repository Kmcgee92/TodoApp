import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      name: "Jake",
      email: `Jake@prisma.io`,
      password: `password`,
      items: {
        create: [
          {
            title: "title",
            content: "content",
          },
          {
            title: "item2",
            content: "content2",
          },
        ],
      },
    },
  });

  const allUsers = await prisma.user.findMany({
    include: {
      items: true,
    },
  });
  console.dir(allUsers, { depth: null });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
