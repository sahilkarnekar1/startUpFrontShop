import { CloseOutlined, DeleteOutlined, DownloadOutlined, EditOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons'
import { Avatar, Button, Card, Col, Empty, Form, Input, InputNumber, Layout, Modal, Popconfirm, Row, Select, Spin, Typography, Upload } from 'antd'
import React, { useEffect, useState } from 'react'
import "../sidebarFiles/inventory.css"
import axios from 'axios'
import { API_BASE_URL } from '../apis/api'
import { toast } from 'react-toastify'
import Meta from 'antd/es/card/Meta'

const Inventory = () => {

  const token = localStorage.getItem("token");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openAddProductModal, setOpenAddProductModal] = useState(false);
  const [form] = Form.useForm();
  const [isEditMode, setIsEditMode] = useState(false);
const [currentProduct, setCurrentProduct] = useState(null);
const [deletedImageUrls, setDeletedImageUrls] = useState([]);


console.log(form.getFieldsValue());
console.log(deletedImageUrls);

const handleResetStatesForAll = ()=>{
   setOpenAddProductModal(false);
  setIsEditMode(false);
  setCurrentProduct(null);
  setDeletedImageUrls([])
  form.resetFields();
}

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_BASE_URL}/api/product/getAllProductsByShopId/shop`, {
        headers: {
          "x-auth-token": token
        }
      });
      console.log(response.data);
      
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddProduct = async (formDataFromSubmit) => {
    setLoading(true)
    try {
      const response = await axios.post(`${API_BASE_URL}/api/product/addProduct`, formDataFromSubmit, {
        headers: {
          "x-auth-token": token,
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Product Added Successfully !")
     handleResetStatesForAll();
      fetchProducts();
    } catch (error) {
      console.error("❌ Error adding product:", error);
    }finally{
      setLoading(false)
    }
  };


  const handleUpdateProduct = async (formData) => {
    setLoading(true)
    try {
      if (deletedImageUrls.length > 0) {
        deletedImageUrls.forEach(url => {
  formData.append("deletedImages[]", url); // or just "deletedImages"
});
      }

      const response = await axios.put(`${API_BASE_URL}/api/product/updateProduct/${currentProduct._id}`, formData, {
        headers: {
          "x-auth-token": token,
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Product Updated Successfully!");
      handleResetStatesForAll();
      fetchProducts();
    } catch (error) {
      toast.error("Error updating product");
    }finally{
      setLoading(false)
    }
  };



  const handleSubmit = () => {
    form.validateFields().then(values => {
      const formData = new FormData();
  
      Object.entries(values).forEach(([key, value]) => {
        if (key === 'tags') {
          formData.append(key, value.join(','));
        } else if (key === 'specs') {
          const specsJson = {};
          value.forEach(({ key: specKey, value: specValue }) => {
            if (specKey && specValue) specsJson[specKey] = specValue;
          });
          formData.append('specs', JSON.stringify(specsJson));
        } else if (key === 'productImages') {
          (value || []).forEach(file => {
            formData.append('productImages', file.originFileObj);
          });
        } else {
          formData.append(key, value);
        }
      });
      if (currentProduct) {
        handleUpdateProduct(formData);
      } else{
        handleAddProduct(formData); 
      }
     
    });
  };
  const handleDelete = async(productId)=>{
    setLoading(true)
    try {
      const response = await axios.delete(`${API_BASE_URL}/api/product/deleteProduct/${productId}`, 
        {
          headers: {
            "x-auth-token": token
          }
        }
      );
      toast.success(response.message);
      fetchProducts();
    } catch (error) {
      toast.error(error.message);
    }finally{
      setLoading(false)
    }
   
  }
  
  const handleEdit = (product) => {
  setIsEditMode(true);
  setCurrentProduct(product);
  setOpenAddProductModal(true);

  const specsList = product.specs ? Object.entries(product.specs).map(([key, value]) => ({ key, value })) : [];

  form.setFieldsValue({
    name: product.name,
    description: product.description,
    brand: product.brand,
    category: product.category,
    subcategory: product.subcategory,
    price: product.price,
    discount: product.discount,
    stock: product.stock,
    unit: product.unit,
    sku: product.sku,
    tags: product.tags || [],
    specs: specsList,
    productImages: [], // leave blank; can't prefill file upload
  });
};


  return (
    <div className='inventoryMainContainer'>

<div style={{ padding: '20px' }}>
      <h2>My Products</h2>
      <Row gutter={[16, 16]}>
        {products.length > 0 ? products.map(product => (
          <Col key={product._id} xs={24} sm={12} md={8} lg={6}>
            <Card
            style={{
              padding:"5px"
            }}
            hoverable
              cover={
                <img
                  alt="Product"
                  src={product.images[0]}
                />
              }
              actions={[
                <EditOutlined key="edit" 
                onClick={() => handleEdit(product)}
                 />,
                <Popconfirm
                  title="Are you sure to delete this product?"
                  onConfirm={() => handleDelete(product._id)}
                  okText="Yes"
                  cancelText="No"
                >
                  <DeleteOutlined key="delete" />
                </Popconfirm>
              ]}
            >
             <Meta
      avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
      title={product.name}
      description={product.price + " Rs"}
    />
            </Card>
          </Col>
        ) 
      )
      :
      (
        <div className='widthmaking100focenterenpty'>

<Empty
    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
    styles={{ image: { height: 60 } }}
    description={
      <Typography.Text>
        Customize <a href="#API">Description</a>
      </Typography.Text>
    }
  >
    <Button onClick={()=> setOpenAddProductModal(true)} type="primary">Create Now</Button>
  </Empty>
        </div>
       
      )
    }
      </Row>
    </div>

      <div className="setFloatingButtonContainer">
      <Button onClick={()=> setOpenAddProductModal(!openAddProductModal)} type="primary" shape="circle" icon={ openAddProductModal ? <CloseOutlined /> : <PlusOutlined /> } size="large" />
      </div>
      <Modal
        title={isEditMode ? "Update Product" : "Add Product"}
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={openAddProductModal}
        onOk={handleSubmit}
        onCancel={handleResetStatesForAll}
        okText={isEditMode ? "Update" : "Add"}
      >
   <div className="addProductInventoryForm">
   <Form layout="vertical" 
     form={form}
     >
        <Form.Item name="name" label="Product Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input.TextArea rows={3} />
        </Form.Item>
        <Form.Item name="brand" label="Brand">
          <Input />
        </Form.Item>
        <Form.Item name="category" label="Category" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="subcategory" label="Subcategory">
          <Input />
        </Form.Item>
        <Form.Item name="price" label="Price" rules={[{ required: true }]}>
          <InputNumber style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item name="discount" label="Discount (%)">
          <InputNumber style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item name="stock" label="Stock" rules={[{ required: true }]}>
          <InputNumber style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item name="unit" label="Unit">
          <Input />
        </Form.Item>
        <Form.Item name="sku" label="SKU" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="tags" label="Tags">
          <Select mode="tags" tokenSeparators={[',']} placeholder="Enter tags" />
        </Form.Item>
        <Form.Item label="Specifications">
  <Form.List name="specs">
    {(fields, { add, remove }) => (
      <>
        {fields.map(({ key, name, ...restField }) => (
          <div key={key} style={{ display: 'flex', gap: '10px', marginBottom: 8 }}>
            <Form.Item
              {...restField}
              name={[name, 'key']}
              rules={[{ required: true, message: 'Missing key' }]}
            >
              <Input placeholder="Key (e.g., color)" />
            </Form.Item>
            <Form.Item
              {...restField}
              name={[name, 'value']}
              rules={[{ required: true, message: 'Missing value' }]}
            >
              <Input placeholder="Value (e.g., red)" />
            </Form.Item>
            <Button danger onClick={() => remove(name)}>Remove</Button>
          </div>
        ))}
        <Form.Item>
          <Button type="dashed" onClick={() => add()} block>
            + Add Spec
          </Button>
        </Form.Item>
      </>
    )}
  </Form.List>
</Form.Item>

        <Form.Item name="productImages" label="Product Images" valuePropName="fileList" getValueFromEvent={e => e.fileList}>
          <Upload multiple listType="picture" beforeUpload={() => false}>
            <Button icon={<UploadOutlined />}>Upload (Max: 5)</Button>
          </Upload>
        </Form.Item>

<Form.Item>
  {currentProduct?.images?.length > 0 && (
  <div style={{ marginTop: 10 }}>
    <Typography.Text strong>Existing Images:</Typography.Text>
    <Row gutter={[8, 8]}>
      {currentProduct.images.map((img, index) => (
        <Col key={index}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <img src={img} alt="Product" style={{ width: 100, height: 100, objectFit: 'cover', borderRadius: 5 }} />
            <Button
              type="primary"
              danger
              icon={<DeleteOutlined />}
              style={{ position: 'absolute', top: 0, right: 0 }}
              onClick={() => {
    setDeletedImageUrls(prev => [...prev, img]);
    setCurrentProduct(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  }}
            />
          </div>
        </Col>
      ))}
    </Row>
  </div>
)}

</Form.Item>


      </Form>
   </div>
       
      </Modal>

        {loading && (
              <div className="loaderstylingadjustmentclass">
                <Spin size="large" />
              </div>
            )}
    </div>
  )
}

export default Inventory
