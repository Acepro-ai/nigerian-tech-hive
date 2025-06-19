
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
  
  // Generate unique names for avatar and CV files
  const avatarName = `${Math.random()}-${newUser.avatar.name}`.replaceAll("/", "");
  const avatarPath = `https://piyurbuxydjkoyiskdzy.supabase.co/storage/v1/object/public/user-image//${avatarName}`;
  
  const cvName = `${Math.random()}-${newUser.cv.name}`.replaceAll("/", "");
  const cvPath = `https://piyurbuxydjkoyiskdzy.supabase.co/storage/v1/object/public/cv-documents//${cvName}`;

  // Insert user data with both avatar and CV paths
  const { error: insertError } = await supabase
    .from("users")
    .insert([{ ...newUser, avatar: avatarPath, cv: cvPath }]);

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

  // Upload avatar to storage
  const { error: avatarStorageError } = await supabase.storage
    .from("user-image")
    .upload(avatarName, newUser.avatar);

  if (avatarStorageError) {
    console.error(avatarStorageError);
    throw new Error(`Avatar upload failed: ${avatarStorageError.message}`);
  }

  // Upload CV to storage
  const { error: cvStorageError } = await supabase.storage
    .from("cv-documents")
    .upload(cvName, newUser.cv);

  if (cvStorageError) {
    console.error(cvStorageError);
    throw new Error(`CV upload failed: ${cvStorageError.message}`);
  }
}
