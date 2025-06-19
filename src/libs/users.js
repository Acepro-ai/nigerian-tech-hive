import supabase from "./supabase";

export default async function getUsers() {
  const { data: users, error } = await supabase.from("users").select("*");

  if (error) {
    console.error(error); // Log the error
    throw new Error("Unable to fetch users");
  }

  return users;
}

export async function createUser(newUser) {
  console.log(newUser);
  const imageName = `${Math.random()}-${newUser.avatar.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = `https://piyurbuxydjkoyiskdzy.supabase.co/storage/v1/object/public/user-image//${imageName}`;

  const { error: insertError } = await supabase
    .from("users")
    .insert([{ ...newUser, avatar: imagePath }]);

  if (insertError) {
    console.error(insertError);
    // Optional: catch specific error message here
    if (insertError.message.startsWith("malformed array literal")) {
      throw new Error(
        "Skills must be written in {skill1, skill2, ...} format."
      );
    }
    throw new Error(insertError.message);
  }

  const { error: storageError } = await supabase.storage
    .from("user-image")
    .upload(imageName, newUser.avatar);

  if (storageError) {
    console.error(storageError);
    throw new Error(storageError.message);
  }
}
