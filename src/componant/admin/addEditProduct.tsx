import React from "react";
import { Form, FormInstance, Input, Modal, Select } from "antd";

type Props = {
  isModalOpen: boolean;
  setShowModal: (res: boolean) => void;
  onOk: () => void;
  form: FormInstance;
  isEdit?: boolean;
  onImageChange: (img: File) => void;
};

const AddEditProduct = ({
  setShowModal,
  isModalOpen,
  form,
  onOk,
  isEdit = false,
  onImageChange,
}: Props) => {
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      // Update the form field value with the concatenated path and file name
      form.setFieldsValue({
        img: `https://github.com/JDBKJayakody/BLFrontend/tree/main/public/temp/${selectedFile.name}`,
      });

      // Pass the selectedFile to the provided onImageChange prop
      onImageChange(selectedFile);
    }
  };

  return (
    <Modal
      title={isEdit ? "Edit Product" : "Add Product"}
      visible={isModalOpen}
      onOk={onOk}
      onCancel={() => setShowModal(false)}
      okType="default"
    >
      <Form form={form} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="price" label="Price" rules={[{ required: true }]}>
          <Input type="number" />
        </Form.Item>
        <Form.Item
          name="quantity"
          label="Stock Quantity"
          rules={[{ required: true }]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          name="category"
          label="Category"
          rules={[{ required: true }]}
          initialValue={"sounds"}
        >
          <Select
            defaultValue="sounds"
            options={[
              { label: "Genareter", value: "genareter" },
              { label: "Screen", value: "screen" },
              { label: "Lights", value: "lights" },
              { label: "Sound", value: "sounds" },
            ]}
          />
        </Form.Item>
        {!form.getFieldValue("_id") && (
          <Form.Item name="img" label="Image" rules={[{ required: true }]}>
            <Input type="file" onChange={handleImageChange} />
          </Form.Item>
        )}
      </Form>
    </Modal>
  );
};

export default AddEditProduct;