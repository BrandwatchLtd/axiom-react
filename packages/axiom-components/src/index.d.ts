declare module '@brandwatch/axiom-components' {

  export type AxiomALIGNMENTS = "start" | "middle" | "end"

  export type AxiomBUTTON_COLORS = "accent" | "negative" | "positive"

  export type AxiomSTATUS_TYPES = "success" | "warning" | "error" | "info";

  export type AxiomLIST_STYLE = "divided" | "seamless" | "separate"

  export type AxiomPOSITIONS = "top" | "bottom" | "left" | "right"

  export type AxiomCOLORS = "forbidden-planet"
    | "tiny-clanger"
    | "critical-mass"
    | "fantastic-voyage"
    | "paradise-lost"
    | "serene-sea"
    | "event-horizon"
    | "electric-dreams"
    | "outer-limits"
    | "giant-leap"
    | "moon-lagoon"
    | "space-invader"
    | "extraterrestrial"
    | "terra-form"
    | "primeval-soup"
    | "future-shock"
    | "sun-maker"
    | "new-horizon"
    | "blast-off"
    | "crash-course"
    | "solar-rust"
    | "ground-control"
    | "space-oddity"
    | "rocky-planet"
    | "deep-thought"
    | "luna-dust";

  export type AxiomALL_COLORS = "faded"
    | "highlight"
    | "success"
    | "error"
    | AxiomCOLORS;

  export type AxiomTEXT_COLORS = "body"
    | "day"
    | "night"
    | "error"
    | "success"
    | "warning"
    | "disabled"
    | "subtle"
    | "twitter"
    | "facebook"
    | "instagram"
    | "sentiment-negative"
    | "sentiment-positive"
    | "sentiment-neutral"
    | "ui-accent"
    | AxiomCOLORS;

  export type AxiomFLAGS = "ad"
    | "ae"
    | "af"
    | "ag"
    | "ai"
    | "al"
    | "am"
    | "ao"
    | "aq"
    | "ar"
    | "as"
    | "at"
    | "au"
    | "aw"
    | "ax"
    | "az"
    | "ba"
    | "bb"
    | "bd"
    | "be"
    | "bf"
    | "bg"
    | "bh"
    | "bi"
    | "bj"
    | "bl"
    | "bm"
    | "bn"
    | "bo"
    | "bq"
    | "br"
    | "bs"
    | "bt"
    | "bv"
    | "bw"
    | "by"
    | "bz"
    | "ca"
    | "cc"
    | "cd"
    | "cf"
    | "cg"
    | "ch"
    | "ci"
    | "ck"
    | "cl"
    | "cm"
    | "cn"
    | "co"
    | "cr"
    | "cu"
    | "cv"
    | "cw"
    | "cx"
    | "cy"
    | "cz"
    | "de"
    | "dj"
    | "dk"
    | "dm"
    | "do"
    | "dz"
    | "ec"
    | "ee"
    | "eg"
    | "eh"
    | "er"
    | "es"
    | "et"
    | "fi"
    | "fj"
    | "fk"
    | "fm"
    | "fo"
    | "fr"
    | "ga"
    | "gb"
    | "gd"
    | "ge"
    | "gf"
    | "gg"
    | "gh"
    | "gi"
    | "gl"
    | "gm"
    | "gn"
    | "gp"
    | "gq"
    | "gr"
    | "gs"
    | "gt"
    | "gu"
    | "gw"
    | "gy"
    | "hk"
    | "hm"
    | "hn"
    | "hr"
    | "ht"
    | "hu"
    | "id"
    | "ie"
    | "il"
    | "im"
    | "in"
    | "io"
    | "iq"
    | "ir"
    | "is"
    | "it"
    | "je"
    | "jm"
    | "jo"
    | "jp"
    | "ke"
    | "kg"
    | "kh"
    | "ki"
    | "km"
    | "kn"
    | "kp"
    | "kr"
    | "kw"
    | "ky"
    | "kz"
    | "la"
    | "lb"
    | "lc"
    | "li"
    | "lk"
    | "lr"
    | "ls"
    | "lt"
    | "lu"
    | "lv"
    | "ly"
    | "ma"
    | "mc"
    | "md"
    | "me"
    | "mf"
    | "mg"
    | "mh"
    | "mk"
    | "ml"
    | "mm"
    | "mn"
    | "mo"
    | "mp"
    | "mq"
    | "mr"
    | "ms"
    | "mt"
    | "mu"
    | "mv"
    | "mw"
    | "mx"
    | "my"
    | "mz"
    | "na"
    | "nc"
    | "ne"
    | "nf"
    | "ng"
    | "ni"
    | "nl"
    | "no"
    | "np"
    | "nr"
    | "nu"
    | "nz"
    | "om"
    | "pa"
    | "pe"
    | "pf"
    | "pg"
    | "ph"
    | "pk"
    | "pl"
    | "pm"
    | "pn"
    | "pr"
    | "ps"
    | "pt"
    | "pw"
    | "py"
    | "qa"
    | "re"
    | "ro"
    | "rs"
    | "ru"
    | "rw"
    | "sa"
    | "sb"
    | "sc"
    | "sd"
    | "se"
    | "sg"
    | "sh"
    | "si"
    | "sj"
    | "sk"
    | "sl"
    | "sm"
    | "sn"
    | "so"
    | "sr"
    | "ss"
    | "st"
    | "sv"
    | "sx"
    | "sy"
    | "sz"
    | "tc"
    | "td"
    | "tf"
    | "tg"
    | "th"
    | "tj"
    | "tk"
    | "tl"
    | "tm"
    | "tn"
    | "to"
    | "tr"
    | "tt"
    | "tv"
    | "tw"
    | "tz"
    | "ua"
    | "ug"
    | "um"
    | "us"
    | "uy"
    | "uz"
    | "va"
    | "vc"
    | "ve"
    | "vg"
    | "vi"
    | "vn"
    | "vu"
    | "wf"
    | "ws"
    | "ye"
    | "yt"
    | "za"
    | "zm"
    | "zw"
    // Unofficial
    | "eu"
    | "gb-eng"
    | "gb-nir"
    | "gb-sct"
    | "gb-wls"
    | "un"
    | "uk"

  export type AxiomICONS = "4chan"
    | "4chan-mono"
    | "annotate"
    | "analytics-alert"
    | "arrow-down"
    | "arrow-down-left"
    | "arrow-down-right"
    | "arrow-left"
    | "arrow-right"
    | "arrow-up"
    | "arrow-up-left"
    | "arrow-up-right"
    | "at"
    | "bar-chart"
    | "benchmark"
    | "blog"
    | "box-collapse"
    | "box-expand"
    | "brandwatch"
    | "chevron-down"
    | "chevron-left"
    | "chevron-right"
    | "chevron-up"
    | "clock"
    | "cloud-upload"
    | "cross"
    | "customise"
    | "data"
    | "deck"
    | "dot"
    | "dot-outline"
    | "double-chevron-left"
    | "double-chevron-right"
    | "download"
    | "drag"
    | "duplicate"
    | "ellipsis"
    | "email"
    | "exclude"
    | "facebook-mono"
    | "facebook"
    | "feedback"
    | "filter"
    | "filter-line"
    | "flip-horizontal"
    | "flip-vertical"
    | "folder"
    | "folder-closed"
    | "followers"
    | "form-resize"
    | "format-bold"
    | "format-italic"
    | "format-quote"
    | "format-title"
    | "format-underline"
    | "globe"
    | "grid"
    | "growth"
    | "hamburger"
    | "heart"
    | "home"
    | "information"
    | "input"
    | "information-circle"
    | "installation"
    | "instagram-mono"
    | "instagram"
    | "integrations"
    | "iris"
    | "kred"
    | "lexis-nexis"
    | "lexis-nexis-mono"
    | "line-graph"
    | "link"
    | "list"
    | "location"
    | "lock"
    | "log"
    | "magnify-glass"
    | "minus"
    | "monitor"
    | "moon"
    | "news"
    | "open"
    | "pause"
    | "pencil"
    | "pinterest-mono"
    | "pinterest"
    | "plugin"
    | "plus"
    | "preview"
    | "qq-mono"
    | "qq"
    | "question-mark"
    | "question-mark-circle"
    | "reddit-mono"
    | "reddit"
    | "refresh"
    | "replace"
    | "reply"
    | "reports"
    | "retweet"
    | "review"
    | "ring"
    | "settings"
    | "share"
    | "shuffle"
    | "sina-weibo-mono"
    | "sina-weibo"
    | "social-panel"
    | "source"
    | "speech"
    | "star"
    | "sun"
    | "switch"
    | "tag"
    | "theme"
    | "tick"
    | "tools"
    | "trash"
    | "triangle-down"
    | "triangle-left"
    | "triangle-right"
    | "triangle-up"
    | "tumblr-mono"
    | "tumblr"
    | "twitter-mono"
    | "twitter"
    | "unlock"
    | "user"
    | "vk"
    | "vk-mono"
    | "warning"
    | "warning-circle"
    | "youtube-mono"
    | "youtube"

  export type AxiomCONSOLE_SHADES = "shade-2" | "shade-3" | "shade-4";

  export type AxiomSHADES = "shade-1" | AxiomCONSOLE_SHADES;

  export type AxiomSPACES = "x0" | "x1" | "x2" | "x3" | "x4" | "x5" | "x6" | "x8";

  export type AxiomMODAL_PADDING = "x0" | "x6" | "x8" | "x12" | "x16";

  export type AxiomHEADING_SIZES = "display2"
    | "display1"
    | "headline"
    | "headtitle"
    | "large"
    | "label"

  export type AxiomTEXT_SIZES = AxiomHEADING_SIZES | "body" | "small";

  export type AxiomTHEMES = "day" | "night";

  class AlertBar extends React.Component<React.PropsWithChildren<AlertBarProps>, any> {
  }

  interface AlertBarProps {
    /** An optional callback that when given adds a removable cross */
    onRemoveClick?: (...args: any[]) => any
    /** Size of the AlertBar */
    size?: "small" | "medium"
    /** Type of AlertBar that affects the coloring and icon */
    type?: AxiomSTATUS_TYPES
  }

  class AlertCard extends React.Component<React.PropsWithChildren<AlertCardProps>, any> {
  }

  interface AlertCardProps {
    /** An optional callback that when given adds a removable cross */
    onRemoveClick?: (...args: any[]) => any
    /** Shade of the background color */
    shade?: AxiomSHADES
    /** Increases/decreases the size of the card */
    size?: "small" | "medium" | "large"
    /** Type of AlertBar that affects the coloring and icon */
    type?: AxiomSTATUS_TYPES
  }

  class AlertDialog extends React.Component<React.PropsWithChildren<AlertDialogProps>, any> {
  }

  interface AlertDialogProps {
    /** Visibility toggle for the AlertDialog */
    isOpen: boolean
    /** Callback for closing the AlertDialog by clicking on the overlay */
    onRequestClose: (...args: any[]) => any
    /** Toggle if the AlertDialog should be closed by pressing Esc */
    shouldCloseOnEsc?: boolean
    /** Alert type */
    type?: AxiomSTATUS_TYPES
  }

  class AlertDialogBody extends React.Component<React.PropsWithChildren<AlertDialogBodyProps>, any> {
  }

  interface AlertDialogBodyProps {
  }

  class AlertDialogHeader extends React.Component<React.PropsWithChildren<AlertDialogHeaderProps>, any> {
  }

  interface AlertDialogHeaderProps {
  }

  class AlertIcon extends React.Component<AlertIconProps, any> {
  }

  interface AlertIconProps {
    /** Size of the indicator and icon */
    size?: "tiny" | "small" | "medium" | "large"
    /** Style of the indicator */
    style?: "primary" | "secondary" | "subtle"
    /** Color of the indicator and icon */
    type?: AxiomSTATUS_TYPES
  }

  class AnimatedLogo extends React.Component<React.PropsWithChildren<AnimatedLogoProps>, any> {
  }

  interface AnimatedLogoProps {
    /** Whether the animation should run after the initial close animation */
    shouldAnimate?: boolean
    onMouseEnter?: (...args: any[]) => any
    onMouseLeave?: (...args: any[]) => any
    logo?: "my" | "cr" | "data"
  }

  class Animation extends React.Component<React.PropsWithChildren<AnimationProps>, any> {
  }

  interface AnimationProps extends BaseProps {
    name?: "fade-in-right" | "fade-in-down" | "fade-in-left" | "fade-in-up"
    timingFunction?: "ease-in" | "ease-out" | "ease-in-out" | "linear"
    toggled?: boolean
  }

  class Animicon extends React.Component<AnimiconProps, any> {
  }

  interface AnimiconProps {
    isIn: boolean
    name: "cross" | "tick"
  }

  class Avatar extends React.Component<React.PropsWithChildren<AvatarProps>, any> {
  }

  interface AvatarProps {
    /** Border around the avatar */
    border?: "small" | "large"
    /** Size of the Avatar */
    size: string
    /** Source of the image */
    src?: string
  }

  class Badge extends React.Component<React.PropsWithChildren<BadgeProps>, any> {
  }

  interface BadgeProps {
    /** Colour of the Badge */
    color?: AxiomALL_COLORS
    /**
     * Controls the full width appearance of the badge either all of the time,
     * with a value of `true` otherwise at one of the breakpoints specified.
     */
    full?: true | "small" | "medium" | "large"
    /** Click handler that applied clickable styling */
    onClick?: (...args: any[]) => any
    /** The opacity of the background of the Badge */
    opacity?: number
  }

  class BadgeGroup extends React.Component<React.PropsWithChildren<BadgeGroupProps>, any> {
  }

  interface BadgeGroupProps {
  }

  class Base extends React.Component<BaseProps, any> {
  }

  interface BaseProps {
    /**
     * The component that should be rendered with the Base component
     * functionality. If a string is given then it must be a valid
     * React registered element tag.
     */
    Component?: any
    /** Pass this prop to get ref to the Base Component instance. */
    baseRef?: any
    /** Class name to be appended to the element */
    className?: string,
    /** Adds ability to make an element invisible */
    cloak?: boolean,
    /** Adds the ability control the visibility of a child cloaked element */
    cloakContainer?: boolean,
    /**
     * Controls if a component should be rendered with `position: relative;`
     */
    container?: boolean,
    /**
     * Control over when the element should be hidden until.
     * Opposite of `visibleUntil`.
     */
    hiddenUntil?: "small" | "medium" | "large",
    /** disables pointer events */
    pointerEventsDisabled?: boolean,
    /** Vertical margins given to the element */
    space?: AxiomSPACES
    /**
     * Distance from the top of the window where the element shall be stuck
     * to. Utility for "position: sticky;".
     */
    sticky?: string,
    /** Text wrap styling */
    textBreak?: "all" | "none" | "word",
    /** Text casing styling */
    textCase?: "capital" | "lower" | "upper",
    /**
     * Text central alignment either all of the time, with a value of `true`
     * otherwise at one of the breakpoints specified.
     */
    textCenter?: true | "small" | "medium" | "large",
    /** Text color styling */
    textColor?: AxiomTEXT_COLORS,
    /** Text ellipsis styling */
    textEllipsis?: boolean,
    /** Text emphasis styling */
    textEmphasize?: boolean,
    /**
     * Text left alignment either all of the time, with a value of `true`
     * otherwise at one of the breakpoints specified.
     */
    textLeft?: true | "small" | "medium" | "large",
    /**
     * Text right alignment either all of the time, with a value of `true`
     * otherwise at one of the breakpoints specified.
     */
    textRight?: true | "small" | "medium" | "large",
    /** Text size styling */
    textSize?: AxiomTEXT_SIZES,
    /** Text strike styling */
    textStrike?: boolean,
    /** Text bold weight styling */
    textStrong?: boolean,
    /** Text underlined styling */
    textUnderline?: boolean,
    /** Theme styling modifier */
    theme?: AxiomTHEMES,
    /**
     * Control over when the element should be visible until.
     * Opposite of `hiddenUntil`.
     */
    visibleUntil?: "small" | "medium" | "large"
  }

  class Button extends React.Component<React.PropsWithChildren<ButtonProps>, any> {
  }

  interface ButtonProps {
    /** Apply active styling */
    active?: boolean
    /** Class name to be appended to the element */
    className?: string
    /** Color of the button */
    color?: AxiomBUTTON_COLORS
    /** Disable interaction behaviour */
    disabled?: boolean
    /**
     * Controls the full width appearance of the badge either all of the time,
     * with a value of `true` otherwise at one of the breakpoints specified.
     */
    full?: true | "small" | "medium" | "large",
    /** Forces button to loose its rounded styling on the left side */
    joinedLeft?: boolean
    /** Forces button to loose its rounded styling on the right side */
    joinedRight?: boolean
    /** Click handler */
    onClick?: (...args: any[]) => any
    /** Shape of the button */
    shape?: "circle" | "rectangle" | "stadium"
    /** Size of standard shape */
    size?: "small" | "medium" | "large" | "huge"
    /** variant of the Button, which affects its coloring and sizing */
    variant?: "primary" | "secondary" | "tertiary" | "quaternary"
  }

  class ButtonGroup extends React.Component<React.PropsWithChildren<ButtonGroupProps>, any> {
  }

  interface ButtonGroupProps extends BaseProps {
    /** Whether the child Buttons should be joined */
    joined?: boolean
  }

  class ButtonIcon extends React.Component<ButtonIconProps, any> {
  }

  interface ButtonIconProps {
    /** Color of the Icon */
    color?: string
    /** Name of the Icon */
    name: AxiomICONS
    /** Size of the Icon */
    size?: string
  }

  class Candytar extends React.Component<CandytarProps, any> {
  }

  interface CandytarProps extends BaseProps {
    color?: AxiomCOLORS
    picker?: (colors: AxiomCOLORS[]) => void
    size: string
  }

  class Canvas extends React.Component<React.PropsWithChildren<CanvasProps>, any> {
  }

  interface CanvasProps {
  }

  class CanvasHeader extends React.Component<CanvasHeaderProps, any> {
  }

  interface CanvasHeaderProps {
    separator?: boolean
    size?: "small" | "large"
  }

  class Card extends React.Component<React.PropsWithChildren<CardProps>, any> {
  }

  interface CardProps {
    /** Applies styling to indicate the Card is in an active state */
    active?: boolean
    /** Applies border styling */
    border?: boolean
    /** Applies border radius */
    borderRadius?: "small" | "large"
    /** Class name to be appended to the element */
    className?: string
    /** Applies styling to indicate the Card is in an hovered state */
    hover?: boolean
    /** When provided, applies styling to indicate the Card is clickable */
    onClick?: (...args: any[]) => any
    /** Shade of the background color */
    shade?: AxiomSHADES
    /** Applies a shadow to the card */
    shadow?: boolean
    /** Increases/decreases the size of the card */
    size?: "small" | "medium" | "large"
  }

  class CardCaption extends React.Component<React.PropsWithChildren<CardCaptionProps>, any> {
  }

  interface CardCaptionProps {
    /** Class name to be appended to the element */
    className?: string
  }

  class CardContent extends React.Component<React.PropsWithChildren<CardContentProps>, any> {
  }

  interface CardContentProps {
    /** Class name to be appended to the element */
    className?: string
    /** Indent the separator */
    separatorIndented?: boolean
    /** Style of the separator */
    separatorStyle?: "dotted" | "solid"
    /** Shade of the background color */
    shade?: AxiomSHADES
    /** Increases/decreases the size of the content */
    size?: "small" | "medium" | "large"
  }

  class CardImage extends React.Component<React.PropsWithChildren<CardImageProps>, any> {
  }

  interface CardImageProps {
    /** Class name to be appended to the element */
    className?: string
  }

  class CardImages extends React.Component<CardImagesProps, any> {
  }

  interface CardImagesProps {
    /** Class name to be appended to the element */
    className?: string
    /**
     * Aspect ratios for the height of the container depending on how many
     * images should be shown
     */
    ratios: any[]
    /** The multiple image sources to be used inside the image grid */
    srcs: string[]
  }

  class CardList extends React.Component<React.PropsWithChildren<CardListProps>, any> {
  }

  interface CardListProps {
    /** Class name to be appended to the element */
    className?: string
    /** Style of the list */
    style?: AxiomLIST_STYLE
  }

  class CheckBox extends React.Component<React.PropsWithChildren<CheckBoxProps>, any> {
  }

  interface CheckBoxProps {
    /** Checked state of the input */
    checked?: boolean,
    /** Disables interactions and applies styling */
    disabled?: boolean,
    /** See Validate[error] */
    error?: any,
    /** Partially checked state of the input */
    indeterminate?: boolean,
    /** Applies styling to indicate the users input was invalid */
    invalid?: boolean,
    /** Name of the group the input belongs to */
    name?: string,
    /** See Validate[patterns] */
    patterns?: any[],
    /** See Validate[required] */
    required?: boolean,
    /** Text that is displayed on hover */
    title?: string
  }

  class CheckBoxGroup extends React.Component<React.PropsWithChildren<CheckBoxGroupProps>, any> {
  }

  interface CheckBoxGroupProps {
  }

  class ChedioButtox extends React.Component<React.PropsWithChildren<ChedioButtoxProps>, any> {
  }

  interface ChedioButtoxProps {
    checked?: boolean,
    className: string,
    disabled?: boolean,
    indeterminate?: boolean,
    inputType: "checkbox" | "radio",
    invalid?: boolean,
    onClick?: (...args: any[]) => any,
    title?: string
  }

  class ChedioButtoxGroup extends React.Component<React.PropsWithChildren<ChedioButtoxGroupProps>, any> {
  }

  interface ChedioButtoxGroupProps {
  }

  class Chip extends React.Component<React.PropsWithChildren<ChipProps>, any> {
  }

  interface ChipProps {
    /** Apply active styling */
    active?: boolean
    /** Disable interaction behaviour */
    disabled?: boolean
    /** Apply invalid styling */
    invalid?: boolean,
    /** Name of the Icon located to the left of the main content */
    leftIcon?: string
    /** Metric content */
    metric?: string
    /** Name of the Icon located to the right of the main content */
    rightIcon?: string
    /** Size of the chip */
    size?: "small" | "medium" | "large" | "huge"
    /** Apply invalid styling */
    valid?: boolean,
  }

  class ChipList extends React.Component<React.PropsWithChildren<ChipListProps>, any> {
  }

  interface ChipListProps extends BaseProps {
    /** Label of the List */
    label?: string
    /** Size of the chips in the chip list */
    size?: "small" | "medium" | "large" | "huge"
  }

  class Cloak extends React.Component<CloakProps, any> {
  }

  interface CloakProps {
    /**
     * Programmatic control over the invisibility of the cloak, as opposed
     * to using the CloakContainer
     */
    invisible?: boolean
  }

  class ColorPicker extends React.Component<ColorPickerProps, any> {
  }

  interface ColorPickerProps {
    /** Colors that should be disabled from selection */
    disabledOptions?: AxiomCOLORS[]
    /** Callback for when the color picker has been opened */
    onOpen?: (...args: any[]) => any
    /** Callback for when a color has been selected, provided with the selected color */
    onSelectColor: (color: AxiomCOLORS) => void
    /** Colors that should be visible for selection */
    options?: AxiomCOLORS[]
    /** Color that should appear as selected */
    selected?: AxiomCOLORS
    /** Diameter of the color picker button */
    size?: string
    /** Width of the color selection container */
    width?: string
    /**  Show a blank color option to clear selection */
    blankOption?: boolean
  }

  class ColorPickerOption extends React.Component<ColorPickerOptionProps, any> {
  }

  interface ColorPickerOptionProps {
    color?: AxiomCOLORS
    disabled?: boolean
    onClick?: (...args: any[]) => any
    size?: string
  }

  class Console extends React.Component<React.PropsWithChildren<ConsoleProps>, any> {
  }

  interface ConsoleProps {
    position: "left" | "right"
    shade?: AxiomCONSOLE_SHADES
    width: string
  }

  class ConsoleHeader extends React.Component<React.PropsWithChildren<ConsoleHeaderProps>, any> {
  }

  interface ConsoleHeaderProps {
    separator?: boolean
    shade?: AxiomCONSOLE_SHADES
    size?: "small" | "large"
  }

  class ConsoleMenuItem extends React.Component<React.PropsWithChildren<ConsoleMenuItemProps>, any> {
  }

  interface ConsoleMenuItemProps {
    active?: boolean
    disabled?: boolean
  }

  class Context extends React.Component<React.PropsWithChildren<ContextProps>, any> {
  }

  interface ContextProps extends BaseProps {
    arrowRef?: (...args: any[]) => any
    className?: string
    color?: AxiomSTATUS_TYPES | "carbon" | "white"
    maxHeight?: string
    /** passed to context tip to decide direction of arrow */
    position?: AxiomPOSITIONS
    width?: string
  }

  class ContextContent extends React.Component<React.PropsWithChildren<ContextContentProps>, any> {
  }

  interface ContextContentProps {
    className?: string
    color?: AxiomSTATUS_TYPES
    hasFullSeparator?: boolean
    height?: string
    maxHeight?: string
    padding?: "none" | "tiny" | "small" | "medium" | "large"
    paddingHorizontal?: "none" | "tiny" | "small" | "medium" | "large"
    paddingVertical?: "none" | "tiny" | "small" | "medium" | "large"
  }

  class ContextMenu extends React.Component<React.PropsWithChildren<ContextMenuProps>, any> {
  }

  interface ContextMenuProps {
    className?: string
    paddingVertical?: "none" | "medium"
  }

  class ContextMenuItem extends React.Component<React.PropsWithChildren<ContextMenuItemProps>, any> {
  }

  interface ContextMenuItemProps {
    className?: string
    disabled?: boolean
    icon?: string
    indeterminate?: boolean
    multiSelect?: boolean
    onClick?: (...args: any[]) => any
    paddingVertical?: "small" | "medium"
    selected?: boolean
  }

  class ContextTip extends React.Component<React.PropsWithChildren<ContextTipProps>, any> {
  }

  interface ContextTipProps {
    color?: AxiomSTATUS_TYPES | AxiomSHADES | "carbon" | "white"
    direction?: AxiomPOSITIONS
  }

  class DataPicker extends React.Component<React.PropsWithChildren<DataPickerProps>, any> {
  }

  interface DataPickerProps {
    /** Selected color that will be displayed in the header */
    color?: AxiomCOLORS
    /** List of pickable colors to override the default, which is all colors. */
    colorOptions?: AxiomCOLORS[]
    /** List of disabled colors that become unpickable */
    disabledColors?: AxiomCOLORS[]
    /** Handler that is called when the color picker is opened */
    onColorPickerOpen?: (...args: any[]) => any
    /** Handler that is called when a color is selected */
    onSelectColor?: (color: AxiomCOLORS) => void
    /** Placeholder text that will be displayed when no value is provided */
    placeholder: string
    /** Value that will be displayed in the header. */
    value?: string
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

  export interface AxiomDateRange {
    startDate: Date
    endDate: Date
  }

  interface DatePickerProps {
    /**
     * The date that should be shown to the user when the picker opens.
     * When a selected date or range is given, that supersedes this
     * property. Defaults to 'today'.
     */
    calendarOpenDate?: Date | null
    /** A lower limit to the earliest date that can be selected */
    earliestSelectableDate?: Date | null
    /** An upper limit to the latest date that can be selected */
    latestSelectableDate?: Date | null
    /** Callback for when the apply button has been clicked */
    onApply?: (...args: any[]) => any
    /** Callback for when the cancel button has been clicked */
    onCancel?: (...args: any[]) => any
    /** Callback for when a date, range with endDate and startDate, or a range
     * out of rangeSelections has been selected */
    onSelect: (date: Date | AxiomDateRange) => void
    /** Whether a date range can be selected */
    rangeSelect?: boolean
    /** Predefined date ranges offered for selection. label will be shown and
     * range is passed to onSelect when clicked. */
    rangeSelections?: { label: string, range: string }[]
    /** A single date that appears selected */
    selectedDate?: Date | null
    /** The date selected at the end of the range */
    selectedEndDate?: Date | null
    /** The selected range, specified as it's label */
    selectedRange?: string
    /** The date selected at the start of the range */
    selectedStartDate?: Date | null
    /** Configuration for a single date picker view or two pickers side by side */
    view?: "single" | "double"
  }

  class DatePickerContext extends React.Component<DatePickerContextProps, any> {
  }

  interface SelectedDateOrRange {
    rangeSelect?: boolean
    selectedDate?: (props: any, propName: any) => void
    selectedEndDate?: (props: any, propName: any) => void
    selectedStart?: (props: any, propName: any) => void
  }

  interface DatePickerContextProps extends SelectedDateOrRange {
    calendarOpenDate?: Date,
    earliestSelectableDate?: Date,
    latestSelectableDate?: Date,
    onApply?: (...args: any[]) => any,
    onCancel?: (...args: any[]) => any,
    onSelect: (...args: any[]) => any,
    rangeSelections: { label: string, range: string }[],
    selectedRange?: string,
    view?: string
  }

  class DatePickerControls extends React.Component<DatePickerControlsProps, any> {
  }

  interface DatePickerControlsProps {
    onApply?: (...args: any[]) => any,
    onCancel?: (...args: any[]) => any,
    rangeSelect?: boolean,
    selectedDate?: Date,
    selectedEndDate?: Date,
    selectedStartDate?: Date,
    view: string
  }

  class DatePickerDay extends React.Component<DatePickerDayProps, any> {
  }

  interface DatePickerDayProps {
    date?: Date,
    disabled: boolean,
    onSelect: (...args: any[]) => any,
    selected: boolean,
    selectedEnd: boolean,
    selectedStart: boolean,
    selection: boolean,
    weekEnd: boolean,
    weekStart: boolean
  }

  class DatePickerHeaderControl extends React.Component<DatePickerHeaderControlProps, any> {
  }

  interface DatePickerHeaderControlProps {
    date: Date,
    earliestSelectableDate?: Date,
    latestSelectableDate?: Date,
    onNext: (...args: any[]) => any,
    onPrevious: (...args: any[]) => any
  }

  class DatePickerRangeSelection extends React.Component<DatePickerRangeSelectionProps, any> {
  }

  interface DatePickerRangeSelectionProps {
    date: Date,
    earliestSelectableDate?: Date,
    latestSelectableDate?: Date,
    onNext: (...args: any[]) => any,
    onPrevious: (...args: any[]) => any
  }

  class DatePickerSelection extends React.Component<DatePickerSelectionProps, any> {
  }

  interface DatePickerSelectionProps extends BaseProps {
    /**
     * The date that should be shown to the user when the picker opens.
     * When a selected date or range is given, that supersedes this
     * property. Defaults to 'today'.
     */
    calendarOpenDate?: Date
    /** A lower limit to the earliest date that can be selected */
    earliestSelectableDate?: Date
    /** An upper limit to the latest date that can be selected */
    latestSelectableDate?: Date
    /** Callback for when a date, range with endDate and startDate, or a range
     * out of rangeSelections has been selected */
    onSelect: (...args: any[]) => any
    /** Whether a date range can be selected */
    rangeSelect?: boolean
    /** Predefined date ranges offered for selection. label will be shown and
     * range is passed to onSelect when clicked. */
    rangeSelections?: { label: string, range: string }[],
    /** A single date that appears selected */
    selectedDate?: Date
    /** The date selected at the end of the range */
    selectedEndDate?: Date
    /** The selected range, specified as it's label */
    selectedRange?: string
    /** The date selected at the start of the range */
    selectedStartDate?: Date
    /** Configuration for a single date picker view or two pickers side by side */
    view?: "single" | "double"
  }

  class DatePickerViewMonth extends React.Component<DatePickerViewMonthProps, any> {
  }

  interface DatePickerViewMonthProps {
    date: Date,
    earliestSelectableDate?: Date,
    latestSelectableDate?: Date,
    onNext: (...args: any[]) => any,
    onPrevious: (...args: any[]) => any
  }

  class Dialog extends React.Component<React.PropsWithChildren<DialogProps>, any> {
  }

  interface DialogProps {
    /** Class name to be appended to the element */
    className?: string,
    /** Stops the dialog closing when the mask is clicked */
    closeOnOverlayClick?: boolean,
    /** Visibility toggle for the Dialog */
    isOpen: boolean,
    /** Callback for closing the Dialog by clicking on the overlay */
    onRequestClose: (...args: any[]) => any,
    /** Overlay shade */
    overlayShade?: AxiomSHADES,
    /** Theme applied to the overlay */
    overlayTheme?: AxiomTHEMES,
    /** Padding around the modal */
    padding?: AxiomMODAL_PADDING,
    /** Toggle if the Dialog should be closed by pressing Esc */
    shouldCloseOnEsc?: boolean,
    /** Provides defaults for dialog and modal size*/
    size?: "large" | "fullscreen",
    /** Theme of the dialog */
    theme?: AxiomTHEMES,
    /** Custom width for Dialog */
    width?: string
  }

  class DialogBody extends React.Component<React.PropsWithChildren<DialogBodyProps>, any> {
  }

  interface DialogBodyProps {
    className?: string
  }

  class DialogFooter extends React.Component<React.PropsWithChildren<DialogFooterProps>, any> {
  }

  interface DialogFooterProps {
    className?: string
  }

  class DialogFooterImage extends React.Component<React.PropsWithChildren<DialogFooterImageProps>, any> {
  }

  interface DialogFooterImageProps {
  }

  class DialogHeader extends React.Component<React.PropsWithChildren<DialogHeaderProps>, any> {
  }

  interface DialogHeaderProps {
    className?: string
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
    active?: boolean
    icon?: string
  }

  class DockItem extends React.Component<React.PropsWithChildren<DockItemProps>, any> {
  }

  interface DockItemProps {
    active?: boolean
  }

  class Dropdown extends React.Component<React.PropsWithChildren<DropdownProps>, any> {
  }

  interface DropdownProps extends BaseProps {
    /**
     * Adds control to enable or disable showing the DropdownSource
     */
    enabled?: boolean,
    /** Controls the starting offset of the content */
    offset?: "start" | "middle" | "end"
    /**
     * Invoked when the Dropdown is closed.
     */
    onRequestClose?: (...args: any[]) => any,
    /**
     * Invoked when the Dropdown is opened.
     */
    onRequestOpen?: (...args: any[]) => any,
    /**
     * Controls the starting position around DropdownTarget in which the
     * DropdownSource will attempt to be placed. If that position is not available
     * due to collision, it will be placed according to the flip behaviour  until
     * a valid position is found.
     */
    position?: AxiomPOSITIONS,
    /** Toggle that allows the arrow of the Context component to be hidden */
    showArrow?: boolean,
    /**
     * Configuration to apply a mask behind the Dropdown content while
     * open. Good for disabling interactions with other things on the page.
     */
    withMask?: boolean
  }

  class DropdownContent extends React.Component<DropdownContentProps, any> {
  }

  interface DropdownContentProps extends BaseProps {
    /** Determines whether the separator below this context box should cut through the padding */
    hasFullSeparator?: boolean,
    /** Set height for the content area, box will remain at this height */
    height?: string,
    /** Maximum height for the content area, exceeding this will make it scrollable */
    maxHeight?: string,
    /** Padding size applied to the content area */
    padding?: "none" | "small" | "medium" | "large",
    /** Horizontal padding size applied to the content area */
    paddingHorizontal: "none" | "small" | "large",
    /** Vertical padding size applied to the content area */
    paddingVertical: "none" | "small" | "large"
  }

  class DropdownContext extends React.Component<React.PropsWithChildren<DropdownContextProps>, any> {
  }

  interface DropdownContextProps extends BaseProps {
    /** React reference function for the arrow element */
    arrowRef?: (...args: any[]) => any,
    /** Color of the Context */
    color?: AxiomSTATUS_TYPES,
    /** Maximum height for the content area, exceeding this will make it scrollable */
    maxHeight?: string,
    /** Position of the content area relative to the arrow */
    position?: AxiomPOSITIONS,
    /** Total width of the component */
    width?: string
  }

  class DropdownMenu extends React.Component<React.PropsWithChildren<DropdownMenuProps>, any> {
  }

  interface DropdownMenuProps {
    paddingVertical?: "none" | "medium"
  }

  class DropdownMenuItem extends React.Component<React.PropsWithChildren<DropdownMenuItemProps>, any> {
  }

  interface DropdownMenuItemProps {
    /** Disabled interactions and applies styling */
    disabled?: boolean,
    /**
     * Whether the menu should stay open after being clicked.
     */
    keepOpen?: boolean,
    /**
     * Whether the menu is part of a multi-selection menu. When true, this
     * will disable automatically closing the DropdownMenu when clicked.
     */
    multiSelect?: boolean,
    /** Click handler  */
    onClick?: (...args: any[]) => any,
    /**  Vertical padding size applied to the menu item */
    paddingVertical?: "small" | "medium",
    /** Provides indication that the menu item is selected */
    selected?: boolean
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
    /** Excluded time-unit options */
    excludedOptions?: "seconds"
      | "minutes"
      | "hours"
      | "days"
      | "weeks"
      | "months"
      | "years"
    /** Invoked when value or unit field has been blurred */
    onBlur?: (...args: any[]) => any,
    /** Invoked with the computed ISO duration value */
    onChange?: (...args: any[]) => any,
    /** Valid ISO duration value (see https://en.wikipedia.org/wiki/ISO_8601#Durations) [DISABLED] */
    value?: (...args: any[]) => any
  }

  class EditableLine extends React.Component<EditableLineProps, any> {
  }

  interface EditableLineProps {
    /** Handler for when the input field is changed */
    onChange: (...args: any[]) => any,
    /** Handler for when a key is pressed int the input field */
    onKeyDown?: (...args: any[]) => any,
    /** Placeholder content to be displayed when there is no value */
    placeholder?: string,
    /** Value to be edited */
    value: string
  }

  class EditableTitle extends React.Component<React.PropsWithChildren<EditableTitleProps>, any> {
  }

  interface EditableTitleProps {
  }

  class EllipsisTooltip extends React.Component<React.PropsWithChildren<EllipsisTooltipProps>, any> {
  }

  interface EllipsisTooltipProps {
    color?: "carbon" | "white"
    delay?: boolean,
    theme?: AxiomTHEMES,
    width?: string
  }

  class Flag extends React.Component<React.PropsWithChildren<FlagProps>, any> {
  }

  interface FlagProps {
    /** Alpha2 country code */
    alpha2?: AxiomFLAGS
    /** Assets URL */
    assetsUrl?: string
    /** Size of the Flag */
    size: string
  }

  class Form extends React.Component<React.PropsWithChildren<FormProps>, any> {
  }

  interface FormProps {
    /**
     * A function called with form event and an error if validation
     * is present.
     *
     * @param {object} event Standard event form object
     * @param {string|null} error Error from Validation if present otherwise null.
     */
    onSubmit?: (event?: any, error?: string | null) => void,
    /** See Validation[requiredError] */
    requiredError?: string
  }

  class Grid extends React.Component<React.PropsWithChildren<GridProps>, any> {
  }

  interface GridProps extends BaseProps {
    /** Class name to be appended to the element */
    className?: string,
    /** Controls the direction of the grid cells */
    direction?: "row" | "column",
    /**
     * Applies fill styling for all GridCell children.
     * See GridCell for fill explanation
     */
    fill?: true | "small" | "medium" | "large",
    /**
     * Applies fit styling for all GridCell children.
     * See GridCell for fit explanation
     */
    fit?: true | "small" | "medium" | "large",
    /**
     * Applies full styling for all GridCell children.
     * See GridCell for full explanation
     */
    full?: true | "small" | "medium" | "large",
    /** Controls the horizontal and vertical spacing between cells */
    gutters?: false | "tiny" | "small" | "medium" | "large"
    /** Controls the horizontal alignment of all cells */
    horizontalAlign?: "start"
      | "middle"
      | "end"
      | "around"
      | "between",
    /** Controls the horizontal spacing between cells */
    horizontalGutters?: false | "tiny" | "small" | "medium" | "large",
    /**
     * Applies none styling for all GridCell children.
     * See GridCell for none explanation
     */
    none?: true | "small" | "medium" | "large"
    /**
     * Default behaviour of cells is to resize to 100% of the grids space when
     * on smaller screen sizes. This allows this behaviour to be suppressed.
     */
    responsive?: boolean,
    /**
     * Applies shrink styling for all GridCell children.
     * See GridCell for shrink explanation
     */
    shrink?: true | "small" | "medium" | "large",
    /** Controls the vertical alignment of all cells */
    verticalAlign?: AxiomALIGNMENTS,
    /** Controls the vertical spacing between cells */
    verticalGutters?: false | "tiny" | "small" | "medium" | "large",
    /** Allows cells to drop to a new line when they require more space */
    wrap?: boolean
  }

  class GridCell extends React.Component<React.PropsWithChildren<GridCellProps>, any> {
  }

  interface GridCellProps {
    /** Class name to be appended to the element */
    className?: string,
    /** Controls the direction of the grid cells */
    direction?: "row" | "column",
    /**
     * Sizes itself according to the size of its contents. This causes the grid
     * to attempt to evenly distribute the cells, but allows cells to increase
     * their width to provide more room for the contents.
     *
     * When a filled cell exceeds the available room (relative to siblings) it
     * will drop onto its own line. Combined with Grids wrapping property, this
     * can controlled not to shrink siblings down.
     *
     * This can be configured to be all of the time or at specific breakpoints.
     */
    fill?: true | "small" | "medium" | "large",
    /**
     * Sizes itself irrespective of its contents. This causes the grid to evenly
     * distribute all children cells. If the grid has wrapping enabled, the cell
     * may drop to a new line when there is no room left.
     *
     * This can be configured to be all of the time or at specific breakpoints.
     */
    fit?: true | "small" | "medium" | "large",
    /**
     * Sizes itself to 100% of the available width within a grid. This causes
     * all other siblings to placed vertically of itself.
     *
     * This can be configured to be all of the time or at specific breakpoints.
     */
    full?: true | "small" | "medium" | "large",
    /**
     * Sizes itself according to the size of its contents, similar to `shrink` it
     * will no increase to any available space but also will not decrease below
     * it's own content size.
     *
     * This can be configured to be all of the time or at specific breakpoints.
     */
    none?: true | "small" | "medium" | "large",
    /**
     * Sizes itself according to the size of its contents, but does not increase
     * to any available width within a grid. This allows all other siblings to
     * consume the available space.
     *
     * This can be configured to be all of the time or at specific breakpoints.
     */
    shrink?: true | "small" | "medium" | "large",
    /**
     * Allows a grid cell function as a flex container itself.
     */
    subGrid?: boolean,
    /**
     * Vertically aligns itself relative to other cells within a grid.
     */
    verticalAlign?: AxiomALIGNMENTS,
    /** Percentage width */
    width?: number
  }

  class Handle extends React.Component<HandleProps, any> {
  }

  interface HandleProps {
    /** Disabled control of the Handle */
    disabled?: boolean,
    /** Visibility of the Handle */
    isVisible?: boolean,
    /** Callback for when the mouse is down **/
    onMouseDown?: (...args: any[]) => any,
    /** The width and height of the handle **/
    size?: number,
    /** Value for the tooltip content */
    value?: number,
    /** Value for the Handle position */
    valueAsPercentage?: number,
    /** Value formatter for the tooltip */
    valueFormatter?: (...args: any[]) => any,
    /** Enables a value indicating tooltip */
    withTooltip?: boolean
  }

  class Heading extends React.Component<HeadingProps, any> {
  }

  interface HeadingProps {
    textSize?: AxiomHEADING_SIZES
  }

  class Icon extends React.Component<IconProps, any> {
  }

  interface IconProps extends BaseProps {
    className?: string
    color?: AxiomTEXT_COLORS
    height?: string
    inline?: boolean
    name: AxiomICONS
    size?: string
    spaceLeft?: "x1" | "x2"
    spaceRight?: "x1" | "x2"
    width?: string
  }

  class IconButton extends React.Component<IconButtonProps, any> {
  }

  interface IconButtonProps {
    buttonStyle?: "primary" | "secondary" | "tertiary" | "quaternary"
    iconColor?: AxiomTEXT_COLORS
    name: string
    size?: "small" | "medium" | "large" | "huge"
  }

  class Image extends React.Component<React.PropsWithChildren<ImageProps>, any> {
  }

  interface ImageProps {
    /** Border applied around the image */
    border?: "small" | "large",
    /** Background color of the image */
    color?: string,
    /** Height of the image. When shape is circle this will be ignored and width will be applied. */
    height?: string,
    /** @type {[type]} [description] */
    maxWidth?: string,
    /** Shape of the image */
    shape?: "circle" | "square" | "rounded"
    /** Source of the image */
    src?: string,
    /** Width of the image. When shape is circle this will also be used for height. */
    width?: string
  }

  class ImageFallback extends React.Component<React.PropsWithChildren<ImageFallbackProps>, any> {
  }

  interface ImageFallbackProps extends BaseProps {
    fallback?: JSX.Element,
    onError?: (...args: any[]) => any,
    onLoad?: (...args: any[]) => any,
    src?: string
  }

  class InlineGroup extends React.Component<React.PropsWithChildren<InlineGroupProps>, any> {
  }

  interface InlineGroupProps {
    className?: string
  }

  class InlineValidation extends React.Component<React.PropsWithChildren<InlineValidationProps>, any> {
  }

  interface InlineValidationProps extends BaseProps {
    children: JSX.Element | JSX.Element[],
    message: string,
    onClick: (...args: any[]) => any,
    onFocus: (...args: any[]) => any,
    position: "top" | "bottom" | "right" | "left",
    showArrow: boolean
  }

  class InputWrapper extends React.Component<React.PropsWithChildren<InputWrapperProps>, any> {
  }

  interface InputWrapperProps {
    disabled?: boolean,
    hasFocus?: boolean,
    inlineLabel?: boolean,
    inputType?: string,
    invalid?: boolean,
    isTarget?: boolean,
    isValid?: boolean,
    label?: JSX.Element,
    labelSpace?: AxiomSPACES,
    size?: "small" | "medium" | "large",
    space?: string,
    style?: string,
    usageHint?: JSX.Element,
    usageHintPosition?: AxiomPOSITIONS,
    valid?: boolean
  }

  class Label extends React.Component<React.PropsWithChildren<LabelProps>, any> {
  }

  interface LabelProps {
    /** Color of the label */
    color?: "white" | "success" | "error",
    /**
     * Controls the full width appearance of the badge either all of the time,
     * with a value of `true` otherwise at one of the breakpoints specified.
     */
    full?: true | "small" | "medium" | "large",
    /** Size of standard shape */
    size?: "small" | "medium"
  }

  class LabelGroup extends React.Component<React.PropsWithChildren<LabelGroupProps>, any> {
  }

  interface LabelGroupProps {
  }

  class LabelIcon extends React.Component<LabelIconProps, any> {
  }

  interface LabelIconProps {
    /** Name of the icon. See <Icon>. */
    name: string
  }

  class Link extends React.Component<React.PropsWithChildren<LinkProps>, any> {
  }

  interface LinkProps {
    Component?: (...args: any[]) => any | string,
    className?: string,
    style?: "body"
      | "day"
      | "inherit"
      | "mono"
      | "night"
      | "normal"
      | "subtle"
  }

  class List extends React.Component<React.PropsWithChildren<ListProps>, any> {
  }

  interface ListProps extends BaseProps {
    style?: "none" | "disc" | "ordered" | "inline"
  }

  class ListItem extends React.Component<React.PropsWithChildren<ListItemProps>, any> {
  }

  interface ListItemProps {
  }

  class Logo extends React.Component<LogoProps, any> {
  }

  interface LogoProps {
    height?: string,
    viewBoxHeight: number,
    viewBoxWidth: number,
    width?: string
  }

  class LogoBox extends React.Component<LogoBoxProps, any> {
  }

  interface LogoBoxProps {
    /** Color of the Logo background */
    color?: "grey" | "white",
    /** Height of the Logo, higher precedence than width */
    height?: string,
    /** Width of the Logo, lower precedence than height */
    width?: string
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
    /** Color of the Logo background */
    color?: "grey" | "white",
    /** Height of the Logo, higher precedence than width */
    height?: string,
    /** Width of the Logo, lower precedence than height */
    width?: string
  }

  class Lozenge extends React.Component<LozengeProps, any> {
  }

  interface LozengeProps {
    className?: string
    size?: "small" | "medium"
    status?: AxiomSTATUS_TYPES | "none" | "loading"
    color?: AxiomCOLORS
      | "sentiment-positive"
      | "sentiment-negative"
      | "sentiment-neutral"
      | "social-twitter"
      | "social-facebook"
      | "social-instagram"
      | "social-reddit"
      | "social-youtube"
      | "social-tumblr"
  }

  class Menu extends React.Component<React.PropsWithChildren<MenuProps>, any> {
  }

  interface MenuProps extends BaseProps {
    /** Size of the menu */
    size?: "medium" | "large"
  }

  class MenuItem extends React.Component<React.PropsWithChildren<MenuItemProps>, any> {
  }

  interface MenuItemProps {
    /** Applies styling to indicate it is active */
    active?: boolean,
    /** Applies styling to indicate it is disabled, and blocks interactions */
    disabled?: boolean
  }

  class Modal extends React.Component<React.PropsWithChildren<ModalProps>, any> {
  }

  interface ModalProps extends BaseProps {
    isOpen: boolean,
    onOverlayClick?: (...args: any[]) => any,
    overlayShade?: AxiomSHADES,
    overlayTheme?: AxiomTHEMES,
    padding?: AxiomMODAL_PADDING
    shouldCloseOnEsc?: boolean
  }

  class Notification extends React.Component<React.PropsWithChildren<NotificationProps>, any> {
  }

  interface NotificationProps {
    children: JSX.Element | JSX.Element[]
    onAppear?: (...args: any[]) => any
    onRemoveClick?: (...args: any[]) => any
    type: AxiomSTATUS_TYPES
  }

  class Notifications extends React.Component<React.PropsWithChildren<NotificationsProps>, any> {
  }

  interface NotificationsProps {
  }

  class Pagination extends React.Component<PaginationProps, any> {
  }

  interface PaginationProps {
    /** Active page number */
    currentPage: number,
    /** The number of page buttons to visible at any time */
    displayRange: number,
    /** Page change handler that will be called with a page number */
    onPageChange?: (...args: any[]) => any,
    /** The total number of pages that are available  */
    totalPages: number
  }

  class PaginationButton extends React.Component<PaginationButtonProps, any> {
  }

  interface PaginationButtonProps {
    active?: boolean,
    onClick?: (...args: any[]) => any,
    page?: number,
    shape?: string
  }

  class Pictogram extends React.Component<PictogramProps, any> {
  }

  interface PictogramProps {
    name?: "3d-globe"
      | "annotation"
      | "bar-chart"
      | "bar-percent-chart"
      | "choropleth-map"
      | "circle-pack"
      | "column-chart"
      | "date-&-time"
      | "featured-content"
      | "female"
      | "file-upload"
      | "frequency-heatmap"
      | "individual"
      | "key-stat"
      | "male"
      | "networks"
      | "organisation"
      | "pie-chart"
      | "polar-chart"
      | "spline-chart"
      | "stream-graph"
      | "table"
      | "tree-map"
      | "twitter-verified"
      | "video"
      | "weather"
      | "web-url"
      | "word-cloud"
    size?: string
  }

  class Platform extends React.Component<React.PropsWithChildren<PlatformProps>, any> {
  }

  interface PlatformProps {
    onConsoleClose?: (...args: any[]) => any,
    openConsolePosition?: "left" | "right",
    openConsoleWidth?: string,
    responsive?: boolean,
    shade?: "shade-1" | "shade-2"
  }

  class Portal extends React.Component<React.PropsWithChildren<PortalProps>, any> {
  }

  interface PortalProps extends BaseProps {
    parentNode?: JSX.Element
  }

  class Position extends React.Component<React.PropsWithChildren<PositionProps>, any> {
  }

  interface PositionProps {
    /**
     * Allows the boundary element for the positioning to be set.
     */
    boundariesElement: JSX.Element | "scrollParent" | "viewport" | "window"
    /**
     * Children inside Position this should contain all of and
     * only PositionSource and PositionTarget or just a PositionSource
     * in the case of a given reference!
     */
    children: JSX.Element | JSX.Element[],
    /** Class name to be appended to the element */
    className?: string,
    /**
     * Adds control to conditionally enable or disable the positioning logic.
     * Must be true for isVisible to take effect.
     */
    enabled?: boolean,
    /** Adds control of content flipping fallbacks. */
    flip?: "anticlockwise" | "clockwise" | "mirror",
    /** Toggles the visibility of the PositionSource */
    isVisible: boolean,
    /** Controls the starting offset of the content */
    offset?: AxiomALIGNMENTS,
    /**
     * When provided a mask will be placed behind PositionSource, where this
     * function is called when clicked.
     */
    onMaskClick?: any,
    /**
     * Optional handler that is called, with the new position, when PositionSource
     * has been positioned.
     */
    onPositionChange?: any,
    /**
     * Controls the starting position around PositionTarget in which the
     * PositionSource will attempt to be placed. If that position is not available
     * due to collision, it will be placed according to the flip behaviour  until
     * a valid position is found.
     */
    position?: AxiomPOSITIONS,
    /**
     * If Position should be attached to an element outside of the React context,
     * either a HTMLElement reference or a Popper.js compatible referenceObject
     * (see https?://popper.js.org/popper-documentation.html#referenceObject) can
     * be passed in.
     */
    reference?: object,
    /** Toggle that allows the arrow of the Context component to be hidden */
    showArrow?: boolean,
    /**
     * PopperJs Modifiers see https://popper.js.org/docs/v2/modifiers/
     */
    popperModifiers?: any[]
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
    /** Shows a successful completion state */
    complete?: boolean,
    /** Shows an error state */
    error?: boolean,
    /** Percentage of progress */
    percent?: number,
    /** Size of the indicator */
    size?: "small" | "medium" | "large",
    /** Size in REM units */
    sizeRem?: string
  }

  class ProgressButton extends React.Component<React.PropsWithChildren<ProgressButtonProps>, any> {
  }

  interface ProgressButtonProps {
    isInProgress?: boolean,
    size?: "small" | "medium" | "large"
  }

  class ProgressFinite extends React.Component<ProgressFiniteProps, any> {
  }

  interface ProgressFiniteProps {
    percent: number
    size?: "small" | "medium" | "large",
    sizeRem?: string
  }

  class ProgressInfinite extends React.Component<ProgressInfiniteProps, any> {
  }

  interface ProgressInfiniteProps {
    className?: string
    color?: "subtle" | "white"
    size?: "small" | "medium" | "large"
    sizeRem?: string
  }

  class RadialProgress extends React.Component<React.PropsWithChildren<RadialProgressProps>, any> {
  }

  interface RadialProgressProps {
    children: JSX.Element | JSX.Element[],
    className: string,
    diameter: number,
    size?: string,
    sizeRem?: string
  }

  class RadioButton extends React.Component<React.PropsWithChildren<RadioButtonProps>, any> {
  }

  interface RadioButtonProps {
    /** Checked state of the input */
    checked?: boolean,
    /** Disables interactions and applies styling */
    disabled?: boolean,
    /** See Validate error */
    error?: (error?: any) => void,
    /** Applies styling to indicate the users input was invalid */
    invalid?: boolean,
    /** Name of the group the input belongs to */
    name?: string,
    /** See Validate[patterns] */
    patterns?: any[],
    /** See Validate[required] */
    required?: boolean,
    /** Text that is displayed on hover */
    title?: string
  }

  class RadioButtonGroup extends React.Component<React.PropsWithChildren<RadioButtonGroupProps>, any> {
  }

  interface RadioButtonGroupProps {
  }

  class Range extends React.Component<RangeProps, any> {
  }

  interface RangeProps {
    /** Disabled control of the slider */
    disabled?: boolean,
    /** Value of the marker to indicate balanced position */
    markerValue?: number,
    /** Maximum number that can be selected */
    max: number,
    /** Maximum label */
    maxLabel?: string,
    /** Minimum number that can be selected */
    min: number,
    /** Minimum label */
    minLabel?: string,
    /** Called when the sliders value changes */
    onChange: (value?: any) => void,
    /** Called when the slider is let go */
    onSlideEnd?: (...args: any[]) => any,
    /** Size of the slider */
    size?: "small" | "medium",
    /** Configures the increments of the slide */
    step?: number,
    /** Value formatter for the tooltip */
    valueFormatter?: (value?: any) => void,
    /** Values */
    values: number[],
    /** Enables a value indicating tooltip */
    withTooltip?: boolean
  }

  class Reveal extends React.Component<React.PropsWithChildren<RevealProps>, any> {
  }

  interface RevealProps {
    /** Content that will revealed */
    children: JSX.Element | JSX.Element[],
    /** Removes children from the reveal container when it is collapsed */
    removeChildren?: boolean,
    /** Revealed status, true will expand out the content, false will collapse it. */
    visible: boolean
  }

  class Select extends React.Component<React.PropsWithChildren<SelectProps>, any> {
  }

  interface SelectProps extends BaseProps {
    /** Event that is fired when the input field is cleared */
    onClear?: (...args: any[]) => any,
    /** Invoked when the SelectMenu is closed. */
    onRequestClose?: (...args: any[]) => any,
    /** Invoked when the SelectMenu is opened. */
    onRequestOpen?: (...args: any[]) => any,
    /** Event that is fired when an option is selected */
    onSelect?: (value?: any) => void,
    /** The value of the selected option  */
    selectedValue?: any,
    /** Value of the input field */
    value: string
  }

  class SelectInput extends React.Component<React.PropsWithChildren<SelectInputProps>, any> {
  }

  interface SelectInputProps extends BaseProps {
    onFocus?: (...args: any[]) => any
  }

  class SelectOption extends React.Component<React.PropsWithChildren<SelectOptionProps>, any> {
  }

  interface SelectOptionProps extends BaseProps {
    onClick?: (...args: any[]) => any
    value: any
  }

  class SelectOptionGroup extends React.Component<React.PropsWithChildren<SelectOptionGroupProps>, any> {
  }

  interface SelectOptionGroupProps {
  }

  class Separator extends React.Component<SeparatorProps, any> {
  }

  interface SeparatorProps {
    className?: string
    borderStyle?: "solid" | "dotted"
    direction?: "horizontal" | "vertical"
  }

  class Slider extends React.Component<SliderProps, any> {
  }

  interface SliderProps {
    /** Disabled control of the slider */
    disabled?: boolean,
    /** Maximum number that can be selected */
    max: number,
    /** Minimum number that can be selected */
    min: number,
    /** Called when the sliders value changes */
    onChange: (x?: any) => void,
    /** Called when the slider is let go */
    onSlideEnd?: (x?: any) => void,
    /** Size of the slider */
    size?: "small" | "medium",
    /** Configures the increments of the slide */
    step?: number,
    /** Value */
    value: number,
    /** Value formatter for the tooltip */
    valueFormatter?: (...args: any[]) => any,
    /** Enables a value indicating tooltip */
    withTooltip?: boolean
  }

  class StatusBadge extends React.Component<StatusBadgeProps, any> {
  }

  interface StatusBadgeProps {
    status: "alpha" | "beta" | "internal" | "new" | "prototype"
  }

  class StatusIndicator extends React.Component<StatusIndicatorProps, any> {
  }

  interface StatusIndicatorProps {
    status?: AxiomSTATUS_TYPES | "none" | "loading"
  }

  class Tab extends React.Component<React.PropsWithChildren<TabProps>, any> {
  }

  interface TabProps {
    /** Applies active state to the tab, this will be controlled by Tabset when used together */
    active?: boolean,
    /** Applies styling to indicate it is inactive, and prevents it from being clicked */
    disabled?: boolean,
    /** Title that is placed with the Tab */
    title: JSX.Element
  }

  class Table extends React.Component<React.PropsWithChildren<TableProps>, any> {
  }

  interface TableProps {
    className?: string,
    space?: string
  }

  class TableBody extends React.Component<React.PropsWithChildren<TableBodyProps>, any> {
  }

  interface TableBodyProps {
    className?: string
  }

  class TableCell extends React.Component<React.PropsWithChildren<TableCellProps>, any> {
  }

  interface TableCellProps {
    className?: string,
    /** Sets the horizontal padding around the cell's content */
    horizontalPadding?: "none" | "medium",
    /** Marks cell as selected */
    isSelected?: boolean,
    /** Set text-align */
    textAlign?: "left" | "right" | "centre",
    /** Sets the vertical padding around the cell's content */
    verticalPadding?: "none" | "small" | "medium" | "large"
  }

  class TableHeader extends React.Component<React.PropsWithChildren<TableHeaderProps>, any> {
  }

  interface TableHeaderProps {
    className?: string
  }

  class TableHeaderLabel extends React.Component<React.PropsWithChildren<TableHeaderLabelProps>, any> {
  }

  interface TableHeaderLabelProps {
    className?: JSX.Element,
    /** Expands table column (Incompatible with 'width') */
    grow?: boolean,
    /** Makes label clickable */
    onClick?: (...args: any[]) => any,
    /** Shrinks table column (Incompatible with 'width') */
    shrink?: boolean,
    /** Selects the column and sets the sort direction */
    sortDirection?: "ascending" | "descending",
    /** Indicates the column is sortable if false it will remove the cloaked icon
     indicating sort direction */
    sortable?: boolean,
    /** Set text-align */
    textAlign?: "left" | "right" | "centre",
    /** Set percentage column width (Incompatible with 'grow' and 'shink') */
    width?: number,
    /** Allow label text wrapping */
    wrap?: boolean
  }

  class TableRow extends React.Component<React.PropsWithChildren<TableRowProps>, any> {
  }

  interface TableRowProps {
    /** Specifies whether or not the row should have borders */
    borderless?: boolean,
    className?: string,
    /** Apply hover styling */
    hover?: boolean,
    /** When pCardrovided, applies styling to indicate the TableRow is clickable */
    onClick?: (...args: any[]) => any
  }

  class Tabs extends React.Component<React.PropsWithChildren<TabsProps>, any> {
  }

  interface TabsProps {
    /** Size control for the Tabs */
    size?: "medium" | "large"
  }

  class Tabset extends React.Component<React.PropsWithChildren<TabsetProps>, any> {
  }

  interface TabsetProps {
    /**
     * Initial activated Tab, after initial mount Tabset takes control of
     * the activated Tabs.
     */
    activeTabIndex?: number,
    /** Size control for the Tabs */
    size?: "medium" | "large",
    /** Vertical spacing between elements */
    space?: string
  }

  class TextArea extends React.Component<TextAreaProps, any> {
  }

  interface TextAreaProps {
    /** Disables interactions and applies styling */
    disabled?: boolean,
    /** See Validate[error] */
    error?: (...args: any[]) => any,
    /** Minimum height of the input field */
    height?: number,
    /** Applies styling to indicate the users input was invalid */
    invalid?: boolean,
    /** Adds a progress indicator the the right of the text input */
    isInProgress?: boolean,
    /** Descriptive label that is placed with the input field */
    label?: any,
    /** Handler for when the input field is blurred */
    onBlur?: (...args: any[]) => any,
    /** Handler for when the input field is focused */
    onFocus?: (...args: any[]) => any,
    /** See Validate[patterns] */
    patterns?: any[],
    /**
     * Descriptive placeholder text that is displayed in the input field
     * when there is no value
     */
    placeholder?: string,
    /** See Validate[required] */
    required?: boolean,
    /**
     * Specifies text to be used in the form element's usage hint that is
     * displayed in a tooltip coming off a question mark in the top right
     */
    usageHint?: string,
    /** direction of usagehint popup */
    usageHintPosition?: AxiomPOSITIONS,
    /** Applies styling to indicate the users input was valid */
    valid?: boolean,
    /** Value of the input field */
    value?: any
  }

  class TextInput extends React.Component<React.PropsWithChildren<TextInputProps>, any> {
  }

  interface TextInputProps {
    /** Class applied to input container*/
    className?: string,
    /** Disables interactions and applies styling */
    disabled?: boolean,
    /** See Validate[error] */
    error?: (...args: any[]) => any,
    /** Display label inline */
    inlineLabel?: boolean,
    /** Class applied to input element */
    inputClassName?: string,
    /** Pass this prop to get ref to the Text Component instance. */
    inputRef?: any,
    /** Applies styling to indicate the users input was invalid */
    invalid?: boolean,
    /** Adds a progress indicator the the right of the text input */
    isInProgress?: boolean,
    /** Changes the icon to pointer */
    isTarget?: boolean,
    /** Descriptive label that is placed with the input field */
    label?: string,
    /** Vertical margin between label and input */
    labelSpace?: AxiomSPACES,
    /** Handler for when the input field is blurred */
    onBlur?: (...args: any[]) => any,
    /** Handler for changing the input field */
    onChange?: (...args: any[]) => any,
    /** Handler for requesting to clear the input field */
    onClear?: (...args: any[]) => any,
    /** Handler for when the input field is focused */
    onFocus?: (...args: any[]) => any,
    /** See Validate[patterns] */
    patterns?: any[],
    /**
     * Descriptive placeholder text that is displayed in the input field
     * when there is no value
     */
    placeholder?: string,
    /** See Validate[required] */
    required?: boolean,
    /** Size of the input field */
    size?: "small" | "medium" | "large",
    /** Visual style variations of the input field */
    style?: "overlay",
    /** Type of the input field */
    type?: "password" | "text" | "number",
    /**
     * Specifies text to be used in the form element's usage hint that is
     * displayed in a tooltip coming off a question mark in the top right
     */
    usageHint?: any,
    /** direction of usagehint popup */
    usageHintPosition?: AxiomPOSITIONS,
    /** Applies styling to indicate the users input was valid */
    valid?: boolean,
    /** Value of the input field */
    value?: string
  }

  class TextInputButton extends React.Component<React.PropsWithChildren<TextInputButtonProps>, any> {
  }

  interface TextInputButtonProps {
    size?: string
  }

  class TextInputIcon extends React.Component<TextInputIconProps, any> {
  }

  interface TextInputIconProps {
    /** Alignment inside the input field */
    align?: "left" | "right",
    /** Color of the TextInputIcon. */
    iconColor?: string,
    /** Name of the icon. See <Icon>. */
    name: string,
    /** Click handler, applies styling to indicate it is clickable. */
    onClick: (...args: any[]) => any,
    /** Optional tooltip for the icon. */
    tooltip: string | JSX.Element
  }

  class TextInputIconWrapper extends React.Component<TextInputIconWrapperProps, any> {
  }

  interface TextInputIconWrapperProps {
    /** Alignment inside the input field */
    align?: "left" | "right",
    /** Click handler, applies styling to indicate it is clickable. */
    onClick?: (...args: any[]) => any,
    /** Optional tooltip for the icon. */
    tooltip?: string | JSX.Element
  }

  class Tip extends React.Component<React.PropsWithChildren<TipProps>, any> {
  }

  interface TipProps {
    /** Background color for the tip */
    color?: AxiomSHADES | AxiomSTATUS_TYPES | "carbon" | "white"
    /** The direction at which the Tip should be pointing. The directions are opposite, for example,
     * if the arrow should be placed on the 'left', its direction prop should be 'right'. The same applies for 'top' and 'bottom'. */
    direction?: AxiomPOSITIONS,
    /** The position of the Tip along the baseline, can be any valid css units including px/rem/percentage. Should be adjusted according ot the use case */
    position?: string,
    /** The Tip can be configured to have a shadow effect. This value is true by default */
    shadow?: boolean,
    size?: "small" | "medium"
  }

  class Toggle extends React.Component<React.PropsWithChildren<ToggleProps>, any> {
  }

  interface ToggleProps {
    /** Set alignment of the switch **/
    align?: "left" | "right" | "full",
    /** Disabled control of the switch */
    disabled?: boolean,
    /** Called when the toggle is toggled/changed */
    onToggle: (...args: any[]) => any,
    /** Size of the toggle */
    size?: "small" | "medium",
    /** Toggled/checked state of the switch */
    toggled: boolean
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
    /**
     * Adds delay to the opening of the tooltip
     */
    delay?: boolean,
    /**
     * Adds control to enable or disable showing the TooltipSource
     */
    enabled?: boolean,
    /**
     * Controls the starting position around TooltipTarget in which the
     * TooltipSource will attempt to be placed. If that position is not available
     * due to collision, it will be placed according to the flip behaviour  until
     * a valid position is found.
     */
    position?: AxiomPOSITIONS
  }

  class TooltipContent extends React.Component<TooltipContentProps, any> {
  }

  interface TooltipContentProps {
    size?: "tiny" | "small"
  }

  class TooltipContext extends React.Component<TooltipContextProps, any> {
  }

  interface TooltipContextProps {
    color?: AxiomSTATUS_TYPES | "carbon" | "white"
  }

  class TooltipSource extends React.Component<React.PropsWithChildren<TooltipSourceProps>, any> {
  }

  interface TooltipSourceProps {
  }

  class TooltipTarget extends React.Component<React.PropsWithChildren<TooltipTargetProps>, any> {
  }

  interface TooltipTargetProps {
    delay?: boolean,
    onClick?: (...args: any[]) => any
  }

  class Transition extends React.Component<React.PropsWithChildren<TransitionProps>, any> {
  }

  interface TransitionProps {
    activeIndex: number,
    children: JSX.Element | JSX.Element[],
    height: string,
    width: string
  }

  class UsageHint extends React.Component<React.PropsWithChildren<UsageHintProps>, any> {
  }

  interface UsageHintProps {
    position?: AxiomPOSITIONS,
    showArrow?: boolean,
    inline?: boolean,
    /** Total width of the usageHint dropdown context */
    width?: string
  }

  class Validate extends React.Component<React.PropsWithChildren<ValidateProps>, any> {
  }

  interface ValidateProps extends BaseProps {
    /**
     * Function that given the inputs invalidations, returns an error
     * message which is given by the top level Validator component.
     */
    error?: (...args: any[]) => any,
    /**
     * Array of patterns to be run against this input.
     */
    patterns: { (): void | RegExp } []
    /** If this is a required field */
    required?: boolean,
    /** Current value to run against the validations */
    value?: any
  }

  class Validation extends React.Component<React.PropsWithChildren<ValidationProps>, any> {
  }

  interface ValidationProps extends BaseProps {
    children: (...args: any[]) => any,
    /** Error to output when required fields have not been met */
    requiredError?: string
  }
}
