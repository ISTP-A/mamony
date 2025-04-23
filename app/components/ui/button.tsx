import { ComponentProps } from 'react';
import { TouchableOpacity } from 'react-native';
import { cn } from '../../utils/cn';

interface BottomCTAProps extends ComponentProps<typeof TouchableOpacity> { }
export function BottomCTA({ className, children, ...rest }: BottomCTAProps) {
    return (
        <TouchableOpacity
            className={cn(
                'w-full h-14 items-center justify-center rounded-md',
                'bg-black',
                className
            )}
            {...rest}>
            {children}
        </TouchableOpacity>
    );
}

interface IconButtonProps extends ComponentProps<typeof TouchableOpacity> { }

export function IconButton({ className, children, ...rest }: IconButtonProps) {
    return (
        <TouchableOpacity
            className={cn(
                'h-10 w-10 items-center justify-center rounded-md',
                'bg-white',
                className
            )}
            {...rest}>
            {children}
        </TouchableOpacity>
    );
}