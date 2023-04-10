import type { IStateSchema } from '../types/state-schema';

export const isModalOpen = (state: IStateSchema) => state.modal.isOpen;
