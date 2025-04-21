import { ComponentProps } from 'react';
import { TouchableOpacity } from 'react-native';
import { cn } from '../../utils/cn';

interface BottomCTAProps extends ComponentProps<typeof TouchableOpacity> { }
export function BottomCTA({ className, children, ...rest }: BottomCTAProps) {
    return (
        <TouchableOpacity
            className={cn(
                'h-14 items-center justify-center rounded-md',
                'bg-black',
                className
            )}
            {...rest}>
            {children}
        </TouchableOpacity>
    );
}
