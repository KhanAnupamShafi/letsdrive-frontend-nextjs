import { createSlice } from '@reduxjs/toolkit';

// Define the interface for the modal state
interface IModal {
  isOpen: boolean;
}

// Initial state with the modal closed
const initialState: IModal = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: 'modalOpen',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    toggleModal: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openModal, closeModal, toggleModal } =
  modalSlice.actions;

export default modalSlice.reducer;
