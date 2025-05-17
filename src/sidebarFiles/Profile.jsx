import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_BASE_URL } from '../apis/api';
import { Card, Descriptions, Image, Spin, Typography } from 'antd';

const { Title } = Typography;

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");

  const fetchProfileData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_BASE_URL}/api/auth/profile`, {
        headers: {
          "x-auth-token": token,
        },
      });
      setProfile(response.data);
    } catch (error) {
      console.error("Error fetching profile:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  return (
    <>
    <Card style={{ margin: 20 }}>
      <Title level={2}>Shop Profile</Title>
      <Descriptions bordered column={1} layout="vertical" size="middle">
        <Descriptions.Item label="Shop Name">{profile?.shopName}</Descriptions.Item>
        <Descriptions.Item label="Shop Number">{profile?.shopNumber}</Descriptions.Item>
        <Descriptions.Item label="Floor Number">{profile?.floorNumber}</Descriptions.Item>
        <Descriptions.Item label="Shop Area">{profile?.shopArea}</Descriptions.Item>
        <Descriptions.Item label="Shop City">{profile?.shopCity}</Descriptions.Item>
        <Descriptions.Item label="Landmark">{profile?.shopLandmark}</Descriptions.Item>
        <Descriptions.Item label="Business Type">{profile?.businessType}</Descriptions.Item>
        <Descriptions.Item label="Created At">{new Date(profile?.createdAt).toLocaleString()}</Descriptions.Item>
        <Descriptions.Item label="Pickup Location">
          Lat: {profile?.pickupLocation?.latitude}, Lng: {profile?.pickupLocation?.longitude}
        </Descriptions.Item>
        <Descriptions.Item label="Owner Name">{profile?.owner?.name}</Descriptions.Item>
        <Descriptions.Item label="Owner Email">{profile?.owner?.email}</Descriptions.Item>
        <Descriptions.Item label="Owner Phone">{profile?.owner?.phone}</Descriptions.Item>
        <Descriptions.Item label="Store Phone">{profile?.owner?.storePrimaryPhone}</Descriptions.Item>

        <Descriptions.Item label="Documents - PAN Card">
          {profile?.documents?.panCard && (
            <Image src={profile?.documents.panCard} width={200} />
          )}
        </Descriptions.Item>
        <Descriptions.Item label="Documents - FSSAI License">
          {profile?.documents?.fssaiLicense && (
            <a href={profile?.documents.fssaiLicense} target="_blank" rel="noopener noreferrer">
              View FSSAI License
            </a>
          )}
        </Descriptions.Item>
        <Descriptions.Item label="Documents - Bank Details">
          {profile?.documents?.bankDetails && (
            <a href={profile?.documents.bankDetails} target="_blank" rel="noopener noreferrer">
              View Bank Details
            </a>
          )}
        </Descriptions.Item>

        <Descriptions.Item label="Shop Images">
          {profile?.shopImages?.length > 0 &&
            profile?.shopImages.map((imgUrl, index) => (
              <Image key={index} src={imgUrl} width={200} style={{ marginRight: 10 }} />
            ))}
        </Descriptions.Item>
      </Descriptions>
    </Card>
     {loading && (
                  <div className="loaderstylingadjustmentclass">
                    <Spin size="large" />
                  </div>
                )}
    
    </>
    
  );
};

export default Profile;
