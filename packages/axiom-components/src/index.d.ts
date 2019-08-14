declare module '@brandwatch/axiom-components' {


  class AlertBar extends React.Component<React.PropsWithChildren<AlertBarProps>, any> {
  }

  interface AlertBarProps {
    onRemoveClick?: any
    size?: any
    type?: any
  }

  class AlertCard extends React.Component<React.PropsWithChildren<AlertCardProps>, any> {
  }

  interface AlertCardProps {
    onRemoveClick?: any
    shade?: any
    size?: any
    type?: any
  }

  class AlertDialog extends React.Component<React.PropsWithChildren<AlertDialogProps>, any> {
  }

  interface AlertDialogProps {
    isOpen?: any
    onRequestClose?: any
    shouldCloseOnEsc?: any
    type?: any
  }

  class AlertDialogBody extends React.Component<React.PropsWithChildren<AlertDialogBodyProps>, any> {
  }

  interface AlertDialogBodyProps {
  }

  class AlertDialogHeader extends React.Component<React.PropsWithChildren<AlertDialogHeaderProps>, any> {
  }

  interface AlertDialogHeaderProps {
  }

  class AlertDropdown extends React.Component<React.PropsWithChildren<AlertDropdownProps>, any> {
  }

  interface AlertDropdownProps {
    enabled?: any
    onRequestClose?: any
    onRequestOpen?: any
    type?: any
    withMask?: any
  }

  class AlertDropdownBody extends React.Component<React.PropsWithChildren<AlertDropdownBodyProps>, any> {
  }

  interface AlertDropdownBodyProps extends BaseProps {
  }

  class AlertDropdownHeader extends React.Component<React.PropsWithChildren<AlertDropdownHeaderProps>, any> {
  }

  interface AlertDropdownHeaderProps {
  }

  class AlertDropdownSource extends React.Component<React.PropsWithChildren<AlertDropdownSourceProps>, any> {
  }

  interface AlertDropdownSourceProps {
  }

  class AlertDropdownTarget extends React.Component<React.PropsWithChildren<AlertDropdownTargetProps>, any> {
  }

  interface AlertDropdownTargetProps {
  }

  class AlertIcon extends React.Component<AlertIconProps, any> {
  }

  interface AlertIconProps {
    size?: any
    style?: any
    type?: any
  }

  class Animation extends React.Component<React.PropsWithChildren<AnimationProps>, any> {
  }

  interface AnimationProps extends BaseProps {
    name?: any
    timingFunction?: any
    toggled?: any
  }

  class Animicon extends React.Component<AnimiconProps, any> {
  }

  interface AnimiconProps {
    isIn?: any
    name?: any
  }

  class Avatar extends React.Component<React.PropsWithChildren<AvatarProps>, any> {
  }

  interface AvatarProps {
    border?: any
    size?: any
    src?: any
  }

  class Badge extends React.Component<React.PropsWithChildren<BadgeProps>, any> {
  }

  interface BadgeProps {
    color?: any
    full?: any
    onClick?: any
    opacity?: any
  }

  class BadgeGroup extends React.Component<React.PropsWithChildren<BadgeGroupProps>, any> {
  }

  interface BadgeGroupProps {
  }

  class Base extends React.Component<BaseProps, any> {
  }

  interface BaseProps {
    Component?: any
    baseRef?: any
    className?: any
    cloak?: any
    cloakContainer?: any
    container?: any
    hiddenUntil?: any
    pointerEventsDisabled?: any
    space?: any
    sticky?: any
    textBreak?: any
    textCase?: any
    textCenter?: any
    textColor?: any
    textEllipsis?: any
    textEmphasize?: any
    textLeft?: any
    textRight?: any
    textSize?: any
    textStrike?: any
    textStrong?: any
    textUnderline?: any
    theme?: any
    visibleUntil?: any
  }

  class Button extends React.Component<React.PropsWithChildren<ButtonProps>, any> {
  }

  interface ButtonProps {
    active?: any
    className?: any
    color?: any
    disabled?: any
    full?: any
    joinedLeft?: any
    joinedRight?: any
    shape?: any
    size?: any
    style?: any
  }

  class ButtonGroup extends React.Component<React.PropsWithChildren<ButtonGroupProps>, any> {
  }

  interface ButtonGroupProps extends BaseProps {
    joined?: any
  }

  class ButtonIcon extends React.Component<ButtonIconProps, any> {
  }

  interface ButtonIconProps {
    color?: any
    isEnd?: any
    isStart?: any
    name?: any
    size?: any
  }

  class Candytar extends React.Component<CandytarProps, any> {
  }

  interface CandytarProps extends BaseProps {
    color?: any
    picker?: any
    size?: any
  }

  class Canvas extends React.Component<React.PropsWithChildren<CanvasProps>, any> {
  }

  interface CanvasProps {
  }

  class CanvasHeader extends React.Component<CanvasHeaderProps, any> {
  }

  interface CanvasHeaderProps {
    separator?: any
    size?: any
  }

  class Card extends React.Component<React.PropsWithChildren<CardProps>, any> {
  }

  interface CardProps {
    active?: any
    border?: any
    borderRadius?: any
    className?: any
    hover?: any
    onClick?: any
    shade?: any
    shadow?: any
    size?: any
  }

  class CardCaption extends React.Component<React.PropsWithChildren<CardCaptionProps>, any> {
  }

  interface CardCaptionProps {
    className?: any
  }

  class CardContent extends React.Component<React.PropsWithChildren<CardContentProps>, any> {
  }

  interface CardContentProps {
    className?: any
    separatorIndented?: any
    separatorStyle?: any
    shade?: any
    size?: any
  }

  class CardImage extends React.Component<React.PropsWithChildren<CardImageProps>, any> {
  }

  interface CardImageProps {
    className?: any
  }

  class CardImages extends React.Component<CardImagesProps, any> {
  }

  interface CardImagesProps {
    className?: any
    ratios?: any
    srcs?: any
  }

  class CardList extends React.Component<React.PropsWithChildren<CardListProps>, any> {
  }

  interface CardListProps {
    className?: any
    style?: any
  }

  class CheckBox extends React.Component<React.PropsWithChildren<CheckBoxProps>, any> {
  }

  interface CheckBoxProps {
    checked?: any
    disabled?: any
    error?: any
    indeterminate?: any
    invalid?: any
    name?: any
    patterns?: any
    required?: any
    title?: any
  }

  class CheckBoxGroup extends React.Component<React.PropsWithChildren<CheckBoxGroupProps>, any> {
  }

  interface CheckBoxGroupProps {
  }

  class Chip extends React.Component<React.PropsWithChildren<ChipProps>, any> {
  }

  interface ChipProps {
    active?: any
    disabled?: any
    leftIcon?: any
    metric?: any
    rightIcon?: any
    size?: any
  }

  class ChipList extends React.Component<React.PropsWithChildren<ChipListProps>, any> {
  }

  interface ChipListProps extends BaseProps {
    label?: any
    size?: any
  }

  class Cloak extends React.Component<CloakProps, any> {
  }

  interface CloakProps {
    invisible?: any
  }

  class ColorPicker extends React.Component<ColorPickerProps, any> {
  }

  interface ColorPickerProps {
    disabledOptions?: any
    onOpen?: any
    onSelectColor?: any
    options?: any
    selected?: any
    size?: any
    width?: any
  }

  class ColorPickerOption extends React.Component<ColorPickerOptionProps, any> {
  }

  interface ColorPickerOptionProps {
    color?: any
    disabled?: any
    onClick?: any
    size?: any
  }

  class Console extends React.Component<React.PropsWithChildren<ConsoleProps>, any> {
  }

  interface ConsoleProps {
    position?: any
    shade?: any
    width?: any
  }

  class ConsoleHeader extends React.Component<React.PropsWithChildren<ConsoleHeaderProps>, any> {
  }

  interface ConsoleHeaderProps {
    separator?: any
    shade?: any
    size?: any
  }

  class ConsoleMenuItem extends React.Component<React.PropsWithChildren<ConsoleMenuItemProps>, any> {
  }

  interface ConsoleMenuItemProps {
    active?: any
    disabled?: any
  }

  class Context extends React.Component<React.PropsWithChildren<ContextProps>, any> {
  }

  interface ContextProps extends BaseProps {
    arrowRef?: any
    className?: any
    color?: any
    maxHeight?: any
    position?: any
    width?: any
  }

  class ContextContent extends React.Component<React.PropsWithChildren<ContextContentProps>, any> {
  }

  interface ContextContentProps {
    className?: any
    color?: any
    hasFullSeparator?: any
    height?: any
    maxHeight?: any
    padding?: any
    paddingHorizontal?: any
    paddingVertical?: any
  }

  class ContextMenu extends React.Component<React.PropsWithChildren<ContextMenuProps>, any> {
  }

  interface ContextMenuProps {
    className?: any
    paddingVertical?: any
  }

  class ContextMenuItem extends React.Component<React.PropsWithChildren<ContextMenuItemProps>, any> {
  }

  interface ContextMenuItemProps {
    className?: any
    disabled?: any
    icon?: any
    indeterminate?: any
    multiSelect?: any
    onClick?: any
    paddingVertical?: any
    selected?: any
  }

  class DataPicker extends React.Component<React.PropsWithChildren<DataPickerProps>, any> {
  }

  interface DataPickerProps {
    color?: any
    colorOptions?: any
    disabledColors?: any
    onColorPickerOpen?: any
    onSelectColor?: any
    placeholder?: any
    value?: any
  }

  class DataPickerDropdown extends React.Component<React.PropsWithChildren<DataPickerDropdownProps>, any> {
  }

  interface DataPickerDropdownProps extends BaseProps {
  }

  class DataPickerMeta extends React.Component<React.PropsWithChildren<DataPickerMetaProps>, any> {
  }

  interface DataPickerMetaProps extends BaseProps {
  }

  class DatePicker extends React.Component<React.PropsWithChildren<DatePickerProps>, any> {
  }

  interface DatePickerProps {
    calendarOpenDate?: any
    earliestSelectableDate?: any
    latestSelectableDate?: any
    onApply?: any
    onCancel?: any
    onSelect?: any
    rangeSelect?: any
    rangeSelections?: any
    selectedDate?: any
    selectedEndDate?: any
    selectedRange?: any
    selectedStartDate?: any
    view?: any
  }

  class DatePickerSelection extends React.Component<DatePickerSelectionProps, any> {
  }

  interface DatePickerSelectionProps extends BaseProps {
    calendarOpenDate?: any
    earliestSelectableDate?: any
    latestSelectableDate?: any
    onSelect?: any
    rangeSelect?: any
    rangeSelections?: any
    selectedDate?: any
    selectedEndDate?: any
    selectedRange?: any
    selectedStartDate?: any
    view?: any
  }

  class Dialog extends React.Component<React.PropsWithChildren<DialogProps>, any> {
  }

  interface DialogProps {
    className?: any
    closeOnOverlayClick?: any
    fullscreen?: any
    isOpen?: any
    onRequestClose?: any
    overlayShade?: any
    overlayTheme?: any
    padding?: any
    shouldCloseOnEsc?: any
    theme?: any
    width?: any
  }

  class DialogBody extends React.Component<React.PropsWithChildren<DialogBodyProps>, any> {
  }

  interface DialogBodyProps {
    className?: any
  }

  class DialogFooter extends React.Component<React.PropsWithChildren<DialogFooterProps>, any> {
  }

  interface DialogFooterProps {
    className?: any
  }

  class DialogFooterImage extends React.Component<React.PropsWithChildren<DialogFooterImageProps>, any> {
  }

  interface DialogFooterImageProps {
  }

  class DialogHeader extends React.Component<React.PropsWithChildren<DialogHeaderProps>, any> {
  }

  interface DialogHeaderProps {
    className?: any
  }

  class Dock extends React.Component<React.PropsWithChildren<DockProps>, any> {
  }

  interface DockProps {
  }

  class DockFooter extends React.Component<React.PropsWithChildren<DockFooterProps>, any> {
  }

  interface DockFooterProps {
  }

  class DockHeader extends React.Component<React.PropsWithChildren<DockHeaderProps>, any> {
  }

  interface DockHeaderProps {
  }

  class DockIconLink extends React.Component<DockIconLinkProps, any> {
  }

  interface DockIconLinkProps {
    active?: any
    icon?: any
  }

  class DockItem extends React.Component<React.PropsWithChildren<DockItemProps>, any> {
  }

  interface DockItemProps {
    active?: any
  }

  class Dropdown extends React.Component<React.PropsWithChildren<DropdownProps>, any> {
  }

  interface DropdownProps extends BaseProps {
    enabled?: any
    offset?: any
    onRequestClose?: any
    onRequestOpen?: any
    position?: any
    showArrow?: any
    withMask?: any
  }

  class DropdownContent extends React.Component<DropdownContentProps, any> {
  }

  interface DropdownContentProps extends BaseProps {
    hasFullSeparator?: any
    height?: any
    maxHeight?: any
    padding?: any
    paddingHorizontal?: any
    paddingVertical?: any
  }

  class DropdownContext extends React.Component<React.PropsWithChildren<DropdownContextProps>, any> {
  }

  interface DropdownContextProps extends BaseProps {
    arrowRef?: any
    color?: any
    maxHeight?: any
    position?: any
    width?: any
  }

  class DropdownMenu extends React.Component<React.PropsWithChildren<DropdownMenuProps>, any> {
  }

  interface DropdownMenuProps {
    paddingVertical?: any
  }

  class DropdownMenuItem extends React.Component<React.PropsWithChildren<DropdownMenuItemProps>, any> {
  }

  interface DropdownMenuItemProps {
    disabled?: any
    keepOpen?: any
    multiSelect?: any
    onClick?: any
    paddingVertical?: any
    selected?: any
  }

  class DropdownSource extends React.Component<React.PropsWithChildren<DropdownSourceProps>, any> {
  }

  interface DropdownSourceProps {
  }

  class DropdownTarget extends React.Component<React.PropsWithChildren<DropdownTargetProps>, any> {
  }

  interface DropdownTargetProps {
  }

  class DurationPicker extends React.Component<DurationPickerProps, any> {
  }

  interface DurationPickerProps extends BaseProps {
    excludedOptions?: any
    onBlur?: any
    onChange?: any
    value?: any
  }

  class EditableLine extends React.Component<EditableLineProps, any> {
  }

  interface EditableLineProps {
    onBlur?: any
    onChange?: any
    onKeyDown?: any
    placeholder?: any
    value?: any
  }

  class EditableTitle extends React.Component<React.PropsWithChildren<EditableTitleProps>, any> {
  }

  interface EditableTitleProps {
  }

  class EllipsisTooltip extends React.Component<React.PropsWithChildren<EllipsisTooltipProps>, any> {
  }

  interface EllipsisTooltipProps {
    delay?: any
    theme?: any
    width?: any
  }

  class Flag extends React.Component<React.PropsWithChildren<FlagProps>, any> {
  }

  interface FlagProps {
    alpha2?: any
    assetsUrl?: any
    size?: any
  }

  class Form extends React.Component<React.PropsWithChildren<FormProps>, any> {
  }

  interface FormProps {
    onSubmit?: any
    requiredError?: any
  }

  class Grid extends React.Component<React.PropsWithChildren<GridProps>, any> {
  }

  interface GridProps {
    className?: any
    direction?: any
    fill?: any
    fit?: any
    full?: any
    gutters?: any
    horizontalAlign?: any
    horizontalGutters?: any
    none?: any
    responsive?: any
    shrink?: any
    verticalAlign?: any
    verticalGutters?: any
    wrap?: any
  }

  class GridCell extends React.Component<React.PropsWithChildren<GridCellProps>, any> {
  }

  interface GridCellProps {
    className?: any
    direction?: any
    fill?: any
    fit?: any
    full?: any
    none?: any
    shrink?: any
    subGrid?: any
    verticalAlign?: any
    width?: any
  }

  class Heading extends React.Component<HeadingProps, any> {
  }

  interface HeadingProps {
    textSize?: any
  }

  class Icon extends React.Component<IconProps, any> {
  }

  interface IconProps extends BaseProps {
    className?: any
    height?: any
    inline?: any
    name?: any
    size?: any
    spaceLeft?: any
    spaceRight?: any
    width?: any
  }

  class IconButton extends React.Component<IconButtonProps, any> {
  }

  interface IconButtonProps {
    buttonStyle?: any
    iconColor?: any
    name?: any
    size?: any
  }

  class Image extends React.Component<React.PropsWithChildren<ImageProps>, any> {
  }

  interface ImageProps {
    border?: any
    color?: any
    height?: any
    maxWidth?: any
    onError?: any
    onLoad?: any
    shape?: any
    src?: any
    width?: any
  }

  class ImageFallback extends React.Component<React.PropsWithChildren<ImageFallbackProps>, any> {
  }

  interface ImageFallbackProps extends BaseProps {
    fallback?: any
    onError?: any
    onLoad?: any
    src?: any
  }

  class InlineGroup extends React.Component<React.PropsWithChildren<InlineGroupProps>, any> {
  }

  interface InlineGroupProps {
    className?: any
  }

  class InlineValidation extends React.Component<React.PropsWithChildren<InlineValidationProps>, any> {
  }

  interface InlineValidationProps extends BaseProps {
    message?: any
    onClick?: any
    onFocus?: any
    position?: any
  }

  class InputWrapper extends React.Component<React.PropsWithChildren<InputWrapperProps>, any> {
  }

  interface InputWrapperProps {
    disabled?: any
    hasFocus?: any
    inlineLabel?: any
    inputType?: any
    invalid?: any
    isTarget?: any
    isValid?: any
    label?: any
    size?: any
    space?: any
    style?: any
    usageHint?: any
    usageHintPosition?: any
    valid?: any
  }

  class Label extends React.Component<React.PropsWithChildren<LabelProps>, any> {
  }

  interface LabelProps {
    color?: any
    full?: any
    size?: any
  }

  class LabelGroup extends React.Component<React.PropsWithChildren<LabelGroupProps>, any> {
  }

  interface LabelGroupProps {
  }

  class LabelIcon extends React.Component<LabelIconProps, any> {
  }

  interface LabelIconProps {
    color?: any
    isEnd?: any
    isStart?: any
    name?: any
  }

  class Link extends React.Component<React.PropsWithChildren<LinkProps>, any> {
  }

  interface LinkProps {
    Component?: any
    style?: any
  }

  class List extends React.Component<React.PropsWithChildren<ListProps>, any> {
  }

  interface ListProps extends BaseProps {
    style?: any
  }

  class ListItem extends React.Component<React.PropsWithChildren<ListItemProps>, any> {
  }

  interface ListItemProps {
  }

  class LogoBox extends React.Component<LogoBoxProps, any> {
  }

  interface LogoBoxProps {
    color?: any
    height?: any
    width?: any
  }

  class LogoHorizontal extends React.Component<LogoHorizontalProps, any> {
  }

  interface LogoHorizontalProps {
    height?: any
    width?: any
  }

  class LogoTab extends React.Component<LogoTabProps, any> {
  }

  interface LogoTabProps {
    color?: any
    height?: any
    width?: any
  }

  class Menu extends React.Component<React.PropsWithChildren<MenuProps>, any> {
  }

  interface MenuProps extends BaseProps {
    size?: any
  }

  class MenuItem extends React.Component<React.PropsWithChildren<MenuItemProps>, any> {
  }

  interface MenuItemProps {
    active?: any
    disabled?: any
  }

  class Modal extends React.Component<React.PropsWithChildren<ModalProps>, any> {
  }

  interface ModalProps extends BaseProps {
    isOpen?: any
    onOverlayClick?: any
    overlayShade?: any
    overlayTheme?: any
    padding?: any
    shouldCloseOnEsc?: any
  }

  class Notification extends React.Component<React.PropsWithChildren<NotificationProps>, any> {
  }

  interface NotificationProps {
    onAppear?: any
    onRemoveClick?: any
    type?: any
  }

  class Notifications extends React.Component<React.PropsWithChildren<NotificationsProps>, any> {
  }

  interface NotificationsProps {
  }

  class Pagination extends React.Component<PaginationProps, any> {
  }

  interface PaginationProps {
    currentPage?: any
    displayRange?: any
    onPageChange?: any
    totalPages?: any
  }

  class Pictogram extends React.Component<PictogramProps, any> {
  }

  interface PictogramProps {
    name?: any
    size?: any
  }

  class Platform extends React.Component<React.PropsWithChildren<PlatformProps>, any> {
  }

  interface PlatformProps {
    onConsoleClose?: any
    openConsolePosition?: any
    openConsoleWidth?: any
    responsive?: any
    shade?: any
  }

  class Portal extends React.Component<React.PropsWithChildren<PortalProps>, any> {
  }

  interface PortalProps extends BaseProps {
    parentNode?: any
  }

  class Position extends React.Component<React.PropsWithChildren<PositionProps>, any> {
  }

  interface PositionProps {
    boundariesElement?: any
    className?: any
    enabled?: any
    flip?: any
    isVisible?: any
    offset?: any
    onMaskClick?: any
    onPositionChange?: any
    position?: any
    reference?: any
    showArrow?: any
  }

  class PositionSource extends React.Component<React.PropsWithChildren<PositionSourceProps>, any> {
  }

  interface PositionSourceProps {
  }

  class PositionTarget extends React.Component<React.PropsWithChildren<PositionTargetProps>, any> {
  }

  interface PositionTargetProps {
  }

  class Progress extends React.Component<ProgressProps, any> {
  }

  interface ProgressProps {
    complete?: any
    error?: any
    percent?: any
    size?: any
    sizeRem?: any
  }

  class ProgressButton extends React.Component<React.PropsWithChildren<ProgressButtonProps>, any> {
  }

  interface ProgressButtonProps {
    isInProgress?: any
    size?: any
  }

  class ProgressFinite extends React.Component<ProgressFiniteProps, any> {
  }

  interface ProgressFiniteProps {
    percent?: any
    size?: any
    sizeRem?: any
  }

  class ProgressInfinite extends React.Component<ProgressInfiniteProps, any> {
  }

  interface ProgressInfiniteProps {
    color?: any
    size?: any
    sizeRem?: any
  }

  class RadioButton extends React.Component<React.PropsWithChildren<RadioButtonProps>, any> {
  }

  interface RadioButtonProps {
    checked?: any
    disabled?: any
    error?: any
    invalid?: any
    name?: any
    patterns?: any
    required?: any
    title?: any
  }

  class RadioButtonGroup extends React.Component<React.PropsWithChildren<RadioButtonGroupProps>, any> {
  }

  interface RadioButtonGroupProps {
  }

  class Range extends React.Component<RangeProps, any> {
  }

  interface RangeProps {
    disabled?: any
    markerValue?: any
    max?: any
    min?: any
    onChange?: any
    onSlideEnd?: any
    size?: any
    step?: any
    valueFormatter?: any
    values?: any
    withTooltip?: any
  }

  class Reveal extends React.Component<React.PropsWithChildren<RevealProps>, any> {
  }

  interface RevealProps {
    removeChildren?: any
    space?: any
    visible?: any
  }

  class Select extends React.Component<React.PropsWithChildren<SelectProps>, any> {
  }

  interface SelectProps extends BaseProps {
    onClear?: any
    onRequestClose?: any
    onRequestOpen?: any
    onSelect?: any
    selectedValue?: any
    value?: any
  }

  class SelectOption extends React.Component<React.PropsWithChildren<SelectOptionProps>, any> {
  }

  interface SelectOptionProps extends BaseProps {
    onClick?: any
    value?: any
  }

  class SelectOptionGroup extends React.Component<React.PropsWithChildren<SelectOptionGroupProps>, any> {
  }

  interface SelectOptionGroupProps {
  }

  class Separator extends React.Component<SeparatorProps, any> {
  }

  interface SeparatorProps {
    borderStyle?: any
    direction?: any
  }

  class Slider extends React.Component<SliderProps, any> {
  }

  interface SliderProps {
    disabled?: any
    max?: any
    min?: any
    onChange?: any
    onSlideEnd?: any
    size?: any
    step?: any
    value?: any
    valueFormatter?: any
    withTooltip?: any
  }

  class StatusBadge extends React.Component<StatusBadgeProps, any> {
  }

  interface StatusBadgeProps {
    status?: any
  }

  class Tab extends React.Component<React.PropsWithChildren<TabProps>, any> {
  }

  interface TabProps {
    active?: any
    disabled?: any
    title?: any
  }

  class Table extends React.Component<React.PropsWithChildren<TableProps>, any> {
  }

  interface TableProps {
  }

  class TableBody extends React.Component<React.PropsWithChildren<TableBodyProps>, any> {
  }

  interface TableBodyProps {
  }

  class TableCell extends React.Component<React.PropsWithChildren<TableCellProps>, any> {
  }

  interface TableCellProps {
    horizontalPadding?: any
    isSelected?: any
    textAlign?: any
    verticalPadding?: any
  }

  class TableHeader extends React.Component<React.PropsWithChildren<TableHeaderProps>, any> {
  }

  interface TableHeaderProps {
  }

  class TableHeaderLabel extends React.Component<React.PropsWithChildren<TableHeaderLabelProps>, any> {
  }

  interface TableHeaderLabelProps {
    grow?: any
    onClick?: any
    shrink?: any
    sortDirection?: any
    sortable?: any
    textAlign?: any
    width?: any
  }

  class TableRow extends React.Component<React.PropsWithChildren<TableRowProps>, any> {
  }

  interface TableRowProps {
    borderless?: any
    hover?: any
    onClick?: any
  }

  class Tabs extends React.Component<React.PropsWithChildren<TabsProps>, any> {
  }

  interface TabsProps {
    size?: any
  }

  class Tabset extends React.Component<React.PropsWithChildren<TabsetProps>, any> {
  }

  interface TabsetProps {
    activeTabIndex?: any
    size?: any
    space?: any
  }

  class TextArea extends React.Component<TextAreaProps, any> {
  }

  interface TextAreaProps {
    disabled?: any
    error?: any
    height?: any
    invalid?: any
    isInProgress?: any
    label?: any
    onBlur?: any
    onFocus?: any
    patterns?: any
    placeholder?: any
    required?: any
    usageHint?: any
    usageHintPosition?: any
    valid?: any
    value?: any
  }

  class TextInput extends React.Component<React.PropsWithChildren<TextInputProps>, any> {
  }

  interface TextInputProps {
    disabled?: any
    error?: any
    inlineLabel?: any
    inputRef?: any
    invalid?: any
    isInProgress?: any
    isTarget?: any
    label?: any
    onBlur?: any
    onChange?: any
    onClear?: any
    onFocus?: any
    patterns?: any
    placeholder?: any
    required?: any
    size?: any
    space?: any
    style?: any
    type?: any
    usageHint?: any
    usageHintPosition?: any
    valid?: any
    value?: any
  }

  class TextInputButton extends React.Component<React.PropsWithChildren<TextInputButtonProps>, any> {
  }

  interface TextInputButtonProps {
  }

  class TextInputIcon extends React.Component<TextInputIconProps, any> {
  }

  interface TextInputIconProps {
    align?: any
    iconColor?: any
    name?: any
    onClick?: any
    tooltip?: any
  }

  class Tip extends React.Component<React.PropsWithChildren<TipProps>, any> {
  }

  interface TipProps {
    arrowRef?: any
    color?: any
    direction?: any
    position?: any
    shadow?: any
    size?: any
  }

  class Toggle extends React.Component<React.PropsWithChildren<ToggleProps>, any> {
  }

  interface ToggleProps {
    align?: any
    disabled?: any
    onToggle?: any
    size?: any
    toggled?: any
  }

  class Tool extends React.Component<React.PropsWithChildren<ToolProps>, any> {
  }

  interface ToolProps {
  }

  class Toolbar extends React.Component<React.PropsWithChildren<ToolbarProps>, any> {
  }

  interface ToolbarProps extends BaseProps {
  }

  class Tooltip extends React.Component<React.PropsWithChildren<TooltipProps>, any> {
  }

  interface TooltipProps {
    delay?: any
    enabled?: any
    onClick?: any
    position?: any
  }

  class TooltipContent extends React.Component<TooltipContentProps, any> {
  }

  interface TooltipContentProps {
    size?: any
  }

  class TooltipContext extends React.Component<TooltipContextProps, any> {
  }

  interface TooltipContextProps {
    color?: any
  }

  class TooltipSource extends React.Component<React.PropsWithChildren<TooltipSourceProps>, any> {
  }

  interface TooltipSourceProps {
  }

  class TooltipTarget extends React.Component<React.PropsWithChildren<TooltipTargetProps>, any> {
  }

  interface TooltipTargetProps {
    delay?: any
    onClick?: any
  }

  class Transition extends React.Component<React.PropsWithChildren<TransitionProps>, any> {
  }

  interface TransitionProps {
    activeIndex?: any
    height?: any
    width?: any
  }

  class UsageHint extends React.Component<React.PropsWithChildren<UsageHintProps>, any> {
  }

  interface UsageHintProps {
    position?: any
    showArrow?: any
    width?: any
  }

  class Validate extends React.Component<React.PropsWithChildren<ValidateProps>, any> {
  }

  interface ValidateProps extends BaseProps {
    error?: any
    patterns?: any
    required?: any
    value?: any
  }

  class Validation extends React.Component<React.PropsWithChildren<ValidationProps>, any> {
  }

  interface ValidationProps extends BaseProps {
    requiredError?: any
  }


}
