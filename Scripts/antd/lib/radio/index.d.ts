/// <reference types="react" />
import Group from './group';
import Button from './radioButton';
import { RadioProps } from './interface';
export * from './interface';
interface CompoundedComponent extends React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<HTMLElement>> {
    Group: typeof Group;
    Button: typeof Button;
}
declare const Radio: CompoundedComponent;
export { Button, Group };
export default Radio;
