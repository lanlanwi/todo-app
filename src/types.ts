export type SetAlertType = (text: string, duration?: number) => void;

export type LastActionType = 'Created' | 'Edited' | 'Completed' | 'Reopened';

export type TodoType = {
  id: string;
  text: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
  completedAt: string | null;
  lastAction: LastActionType;
};

export type OnAddType = (text: string) => void;

export type OnToggleType = (id: string) => void;

export type OnEditType = (id: string, text: string) => void;

export type OnDeleteType = (id: string) => void;

export type FilterType = 'All' | 'Active' | 'Completed';

export type SortType = 'new' | 'old' | 'az' | 'za';

export type OnSetFilterType = (val: FilterType) => void;

export type OnSetSortType = (val: SortType) => void;

export type InfoType = {
  open: boolean;
  alert: boolean;
};

export type OnSetInfoType = (val: boolean, item?: TodoType | null) => void;

export type OnOpenAlertType = () => void;

export type OnCloseAlertType = () => void;
