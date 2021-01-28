import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      name: "Demo",
      email: `Demo@BaseCampFranchising.com`,
      password: `password`,
      items: {
        create: [
          {
            title: "Start Date",
            content: "fill out new hire paperwork",
          },
          {
            title: "Relocation",
            content: "Get with Craig about the assistance with relocation.",
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
