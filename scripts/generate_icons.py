import os
import cairosvg

# Sizes for the icons
ICON_SIZES = [72, 96, 128, 144, 192, 512]

def generate_icons():
    # Get the directory of this script
    script_dir = os.path.dirname(os.path.abspath(__file__))
    # Get the project root directory (parent of scripts)
    project_root = os.path.dirname(script_dir)
    # Source SVG file
    svg_path = os.path.join(project_root, 'public', 'baby.svg')
    
    # Create output directory if it doesn't exist
    output_dir = os.path.join(project_root, 'public', 'icons')
    os.makedirs(output_dir, exist_ok=True)
    
    # Generate icons for each size
    for size in ICON_SIZES:
        output_path = os.path.join(output_dir, f'baby-icon-{size}.png')
        print(f"Generating {size}x{size} icon...")
        
        # Convert SVG to PNG
        cairosvg.svg2png(
            url=svg_path,
            write_to=output_path,
            output_width=size,
            output_height=size,
            background_color='white'  # Add white background
        )
        print(f"Generated: {output_path}")

if __name__ == "__main__":
    print("Starting icon generation...")
    generate_icons()
    print("Icon generation complete!")
