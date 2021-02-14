import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();
import bcrypt from "bcryptjs";

export default async function main() {
  async function hashPassword() {
    const saltRounds = 10;

    const protectedPassword = await new Promise((resolve, reject) => {
      bcrypt.hash("password", saltRounds, function (err, hash) {
        if (err) reject(err);
        resolve(hash);
      });
    });

    return protectedPassword;
  }
  const hashedPassword = await hashPassword();
  console.log("inside seed file!!!!");
  await prisma.user.create({
    data: {
      name: "Demo",
      email: `demo@bcf.com`,
      password: hashedPassword,
      items: {
        create: [
          {
            title: "Title",
            content: "Content",
            completed: false,
          },
          {
            title: "Second",
            content: "Lorem Ipsum",
            completed: true,
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
