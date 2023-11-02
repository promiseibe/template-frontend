import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Card from "../../components/card/Card";
import Loader from "../../components/loader/Loader";
import PageMenu from "../../components/pageMenu/PageMenu";
import { getUser, updatePhoto } from "../../redux/features/auth/authSlice";
import { updateUser } from "../../redux/features/auth/authSlice";
import "./Profile.scss";

// cloud name and Preset
const cloud_name = process.env.REACT_APP_CLOUD_NAME;
const url = "https://api.cloudinary.com/v1_1/djpjicmhj/image/upload";


const Profile = () => {
  const { isLoading, user } = useSelector((state) => state.auth);
  const initialState = {
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    role: user?.role || "",
    photo: user?.photo || "",
    address: {
      address: user?.address?.address || "",
      state: user?.address?.state || "",
      country: user?.address?.country || "",
    },
  };
  const [profile, setProfile] = useState(initialState);
  const [profileImage, setProfileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (user === null) dispatch(getUser());
  }, [dispatch, user]);

  useEffect(() => {
    if (user)
      setProfile({
        name: user?.name || "",
        email: user?.email || "",
        phone: user?.phone || "",
        role: user?.role || "",
        photo: user?.photo || "",
        address: {
          address: user?.address?.address || "",
          state: user?.address?.state || "",
          country: user?.address?.country || "",
        },
      });

  }, [dispatch, user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const SaveProfile = async (e) => {
    e.preventDefault();
    const userData = {
      name: profile.name,
      phone: profile.phone,
      photo: user?.photo || "",
      address: {
        address: profile.address,
        state: profile.state,
        country: profile.country,
      },
    };
    await dispatch(updateUser(userData));
  };

  const savePhoto = async(e) => {
    e.preventDefault();
    let imageURL;
    try {
      if(profileImage !== null && 
        (profileImage.type === "image/jpeg" || profileImage.type === "image/jpg" || profileImage.type === "image/png")
        ) {
          const image = new FormData()
          image.append("file", profileImage)
          image.append("cloud_name", cloud_name)
          image.append("upload_preset", "debc0z0j")

          // Save image to cloudinary
          const response = await fetch(url, {
            method: "post",
            body: image
          })
          console.log(response)
          const imgData = await response.json();
         
          imageURL = imgData.url.toString()
           console.log(imageURL)
        }

        // save image to My DataBase
        const userData = {
          photo: profileImage ? imageURL : profile.photo
        }
        await dispatch(updatePhoto(userData))
        setImagePreview(null)
    } catch (error) {
     toast.error(error.message)
    }
  };
  return (
    <>
      <section>
        {isLoading && <Loader />}
        <div className="container">
          <PageMenu />
          <h2>Profile</h2>
          <div className="--flex-start profile">
            <Card className={"card"}>
              {!isLoading && (
                <>
                  <div className="profile-photo">
                    <div>
                      <img
                        src={imagePreview === null ? user?.photo : imagePreview}
                        alt="profiles"
                      />
                      <h3>
                        Role:{" "}
                        <span className="profile-role">{profile.role}</span>
                      </h3>

                      {imagePreview !== null && (
                        <div className="--center-all">
                          <button
                            className="--btn --btn-secondary"
                            onClick={savePhoto}
                          >
                            <i className="fa-solid fa-upload"></i>upload Photo
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  <form onSubmit={SaveProfile}>
                    <p>
                      <label>Change Photo:</label>
                      <input
                        type="file"
                        accept="image/*"
                        name="image"
                        onChange={handleImageChange}
                        required
                      />
                    </p>
                    <p>
                      <label>Name:</label>
                      <input
                        type="text"
                        name="name"
                        value={profile?.name}
                        onChange={handleInputChange}
                      />
                    </p>
                    <p>
                      <label>Email:</label>
                      <input
                        type="email"
                        name="email"
                        value={profile?.email}
                        onChange={handleInputChange}
                        disabled
                      />
                    </p>
                    <p>
                      <label>Phone:</label>
                      <input
                        type="text"
                        name="phone"
                        value={profile?.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </p>
                    <p>
                      <label>Address:</label>
                      <input
                        type="text"
                        name="address"
                        value={profile?.address?.address}
                        onChange={handleInputChange}
                        required
                      />
                    </p>
                    <p>
                      <label>State:</label>
                      <input
                        type="text"
                        name="state"
                        value={profile?.address?.address}
                        onChange={handleInputChange}
                        required
                      />
                    </p>
                    <p>
                      <label>Country:</label>
                      <input
                        type="text"
                        name="country"
                        value={profile?.address?.address}
                        onChange={handleInputChange}
                        required
                      />
                    </p>
                    <button className="--btn --btn-primary --btn-block">
                      Update Profile
                    </button>
                  </form>
                </>
              )}
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
