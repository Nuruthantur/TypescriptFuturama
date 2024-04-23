import UpdateProfileForm from "../components/UpdateProfileForm";

// Component for updating user profile information
function UpdateProfilePage() {
  // Render the form for updating user profile information
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        textAlign: "center",
      }}>
      <div>
        <h1>Update your profile</h1>
        <UpdateProfileForm submitTitle="Submit Form" />
      </div>
    </div>
  );
}

export default UpdateProfilePage;
