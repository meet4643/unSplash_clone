import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import axios from "axios";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Masonry } from "@mui/lab";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DownloadIcon from "@mui/icons-material/Download";
import { useSelector } from "react-redux";
import { Div, Img, Likes, Span } from "./style";
import { useMediaQuery } from "@mui/material";
// import { setSearch } from "../../../store/slices/Slice";
function ImageMasonry() {
  const [images, setImages] = useState([]);
  const [likedImages, setLikedImages] = useState("");
  const [showLikes, setShowLikes] = useState(null);
  const isTablate = useMediaQuery("(max-width:768px)");
  const isMobile = useMediaQuery("(max-width:590px)");

  // const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.search.search);
  console.log(searchValue);
  const token = "TVqrVNp7JCT1zPpqm8ELxu7pmxgKWXglCMmOKZeM6X4";
  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=1&query=${searchValue}&client_id=${token}`
      )
      .then((response) => {
        console.log(response.data);
        const imageData = response.data.results.map((item) => ({
          id: item.id,
          user: item.user,
          url: item.urls.regular,
        }));
        setImages(imageData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // if (images.length > 0) {
  //   dispatch(setSearch(images[0].url));
  // }
  const handleLike = (id) => {
    const updatedLikedImages = likedImages.includes(id)
      ? likedImages.filter((likedId) => likedId !== id)
      : [...likedImages, id];
    setLikedImages(updatedLikedImages);
    localStorage.setItem("likedImages", id);

    axios
      .post(`https://api.unsplash.com/photos/${id}/like`, {
        headers: {
          Authorization: `Client-ID ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleMouseEnter = (id) => {
    setShowLikes(id);
    console.log(searchValue);
  };

  const handleMouseLeave = () => {
    setShowLikes(null);
  };
  const avtar = images.reduce((acc, e) => {
    acc[e.user.id] = e.user.profile_image.large;
    return acc;
  }, {});

  const handleDownload = async (id, url) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const downloadUrl = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = "image.jpg"; // Replace with the desired file name
      link.click();

      URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        // border: "1px solid green",
      }}
    >
      <Masonry
        columns={isMobile ? 1 : isTablate ? 2 : 3}
        spacing={2}
        sx={{
          width: "80%",
          display: "flex",
          margin: "0.5rem",
        }}
      >
        {images.map((item) => (
          <div
            key={item.id}
            style={{
              position: "relative",
            }}
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
          >
            {showLikes === item.id && (
              <>
                <Likes>
                  <FavoriteIcon
                    fontSize="small"
                    onClick={() => handleLike(item.id)}
                    sx={{
                      position: "absolute",
                      top: "5%",
                      right: "20%",
                      cursor: "pointer",
                      color: likedImages.includes(item.id) ? "white" : "gray",
                      backgroundColor: likedImages.includes(item.id)
                        ? "red"
                        : "white",
                      borderRadius: "2px",
                      padding: "2px 8px",
                    }}
                  />

                  <AddCircleOutlineIcon
                    fontSize="small"
                    sx={{
                      position: "absolute",
                      top: "5%",
                      right: "7%",
                      cursor: "pointer",
                      color: "black",
                      padding: "2px 8px",
                      borderRadius: "2px",
                      backgroundColor: "white",
                    }}
                  />
                  <Div>
                    <img
                      key={item.user.id}
                      src={avtar[item.user.id]}
                      alt="avatar"
                      style={{
                        height: "40px",
                        borderRadius: "50%",
                      }}
                    />
                    <p>{item.user.name}</p>
                    <Span>
                      <DownloadIcon
                        fontSize="small"
                        onClick={() => handleDownload(item.id, item.url)}
                        sx={{
                          cursor: "pointer",
                          backgroundColor: "white",
                          borderRadius: "2px",
                          color: "black",
                          padding: "2px 8px",
                        }}
                      />
                    </Span>
                  </Div>
                </Likes>
                {/* </div> */}
              </>
            )}
            <div>
              <Img
                src={`${item.url}?w=162&auto=format`}
                srcSet={`${item.url}?w=162&auto=format&dpr=2 2x`}
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </Masonry>
    </Box>
  );
}

export default ImageMasonry;
