GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('star_forge')
        .category('gregstar')
        .setEUIO('in')
        .setMaxIOSize(15, 5, 5, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC);
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('star_forge', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('star_forge')
        // .recipeModifier(GTRecipeModifiers.PARALLEL_HATCH.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK, GTRecipeModifiers.ELECTRIC_OVERCLOCK))
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK)])
        .appearanceBlock(GCyMBlocks.CASING_ATOMIC)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("               ", "               ", "               ", "               ", "               ", "      W W      ", "     CWEWC     ", "      W W      ", "               ", "               ", "               ", "               ", "               ")
            .aisle("               ", "               ", "               ", "               ", "      GCG      ", "     CWCWC     ", "   CCPPPPPCC   ", "     CWCWC     ", "      GCG      ", "               ", "               ", "               ", "               ")
            .aisle("               ", "               ", "      GCG      ", "     GGCGG     ", "    GG   GG    ", "   CC WCW CC   ", "  CPPCWCWCPPC  ", "   CC WCW CC   ", "    GG   GG    ", "     GGCGG     ", "      GCG      ", "               ", "               ")
            .aisle("               ", "      GCG      ", "    GG   GG    ", "   GG     GG   ", "   G       G   ", "  C         C  ", " CPCC  S  CCPC ", "  C         C  ", "   G       G   ", "   GG     GG   ", "    GG   GG    ", "      GCG      ", "               ")
            .aisle("               ", "     GGCGG     ", "   GG     GG   ", "   G       G   ", "  G         G  ", "  C         C  ", " CPC       CPC ", "  C         C  ", "  G         G  ", "   G       G   ", "   GG     GG   ", "     GGCGG     ", "               ")
            .aisle("      CCC      ", "    GG C GG    ", "   G       G   ", "  G         G  ", "  G         G  ", " C           C ", "CPC         CPC", " C           C ", "  G         G  ", "  G         G  ", "   G       G   ", "    GG C GG    ", "      CCC      ")
            .aisle("     CFCFC     ", "   GG CCC GG   ", "  G    C    G  ", "  G         G  ", " G           G ", "WWW         WWW", "WPW         WPW", "WWW         WWW", " G           G ", "  G         G  ", "  G    C    G  ", "   GG CCC GG   ", "     CFCFC     ")
            .aisle("     CCFCC     ", "   CCCCPCCCC   ", "  C   CCC   C  ", "  C    S    C  ", " C           C ", " CC         CC ", "EPCS   I   SCPE", " CC         CC ", " C           C ", "  C    S    C  ", "  C   CCC   C  ", "   CCCCPCCCC   ", "     CCFCC     ")
            .aisle("     CFCFC     ", "   GG CCC GG   ", "  G    C    G  ", "  G         G  ", " G           G ", "WWW         WWW", "WPW         WPW", "WWW         WWW", " G           G ", "  G         G  ", "  G    C    G  ", "   GG CCC GG   ", "     CFCFC     ")
            .aisle("      CCC      ", "    GG C GG    ", "   G       G   ", "  G         G  ", "  G         G  ", " C           C ", "CPC         CPC", " C           C ", "  G         G  ", "  G         G  ", "   G       G   ", "    GG C GG    ", "      CCC      ")
            .aisle("               ", "     GGCGG     ", "   GG     GG   ", "   G       G   ", "  G         G  ", "  C         C  ", " CPC       CPC ", "  C         C  ", "  G         G  ", "   G       G   ", "   GG     GG   ", "     GGCGG     ", "               ")
            .aisle("               ", "      GCG      ", "    GG   GG    ", "   GG     GG   ", "   G       G   ", "  C         C  ", " CPCC  S  CCPC ", "  C         C  ", "   G       G   ", "   GG     GG   ", "    GG   GG    ", "      GCG      ", "               ")
            .aisle("               ", "               ", "      GCG      ", "     GGCGG     ", "    GG   GG    ", "   CC WCW CC   ", "  CPPCWCWCPPC  ", "   CC WCW CC   ", "    GG   GG    ", "     GGCGG     ", "      GCG      ", "               ", "               ")
            .aisle("               ", "               ", "               ", "               ", "      GCG      ", "     CWCWC     ", "   CCPPPPPCC   ", "     CWCWC     ", "      GCG      ", "               ", "               ", "               ", "               ")
            .aisle("               ", "               ", "               ", "               ", "               ", "      W W      ", "     AWMWA     ", "      W W      ", "               ", "               ", "               ", "               ", "               ")
            .where('M', Predicates.controller(Predicates.blocks(definition.get())))
            .where('W', Predicates.blocks(GTBlocks.COIL_TRINIUM.get()))
            .where("P", Predicates.blocks(GTBlocks.SUPERCONDUCTING_COIL.get()))
            .where('G', Predicates.blocks("connectedglass:clear_glass_black"))
            .where('I', Predicates.blocks("allthetweaks:atm_star_block"))
            .where('S', Predicates.blocks("mekanism:supercharged_coil"))
            .where('E', Predicates.abilities(PartAbility.INPUT_ENERGY).setMinGlobalLimited(2)
                .or(Predicates.blocks('gtceu:atomic_casing'))) /*$GCyMBlocks.CASING_ATOMIC.get()*/
            .where('C', Predicates.blocks('gtceu:atomic_casing')
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setExactLimit(1))) /*$GCyMBlocks.CASING_ATOMIC.get()*/
            .where('F', Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(5)
                .or(Predicates.blocks('gtceu:atomic_casing'))) /*$GCyMBlocks.CASING_ATOMIC.get()*/
            .where('A', Predicates.abilities(PartAbility.IMPORT_ITEMS).setExactLimit(1)
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS)).setExactLimit(1)
                .or(Predicates.blocks('gtceu:atomic_casing'))) /*$GCyMBlocks.CASING_ATOMIC.get()*/
            .where(' ', Predicates.any())
            .build())
        .shapeInfo(controller => MultiblockShapeInfo.builder()
            .aisle("               ", "               ", "               ", "               ", "               ", "      W W      ", "     CWCWC     ", "      W W      ", "               ", "               ", "               ", "               ", "               ")
            .aisle("               ", "               ", "               ", "               ", "      GCG      ", "     CWCWC     ", "   CCPPPPPCC   ", "     CWCWC     ", "      GCG      ", "               ", "               ", "               ", "               ")
            .aisle("               ", "               ", "      GCG      ", "     GGCGG     ", "    GG   GG    ", "   CC WCW CC   ", "  CPPCWCWCPPC  ", "   CC WCW CC   ", "    GG   GG    ", "     GGCGG     ", "      GCG      ", "               ", "               ")
            .aisle("               ", "      GCG      ", "    GG   GG    ", "   GG     GG   ", "   G       G   ", "  C         C  ", " CPCC  R  CCPC ", "  C         C  ", "   G       G   ", "   GG     GG   ", "    GG   GG    ", "      GCG      ", "               ")
            .aisle("               ", "     GGCGG     ", "   GG     GG   ", "   G       G   ", "  G         G  ", "  C         C  ", " CPC       CPC ", "  C         C  ", "  G         G  ", "   G       G   ", "   GG     GG   ", "     GGCGG     ", "               ")
            .aisle("      CCC      ", "    GG C GG    ", "   G       G   ", "  G         G  ", "  G         G  ", " C           C ", "CPC         CPC", " C           C ", "  G         G  ", "  G         G  ", "   G       G   ", "    GG C GG    ", "      CCC      ")
            .aisle("     CCCCC     ", "   GG CCC GG   ", "  G    C    G  ", "  G         G  ", " G           G ", "WWW         WWW", "WPW         WPW", "WWW         WWW", " G           G ", "  G         G  ", "  G    C    G  ", "   GG CCC GG   ", "     CFCFC     ")
            .aisle("     CCCCC     ", "   CCCCPCCCC   ", "  C   CCC   C  ", "  C    s    C  ", " C           C ", " CC         CC ", "EPCQ   I   qCPe", " CC         CC ", " C           C ", "  C    S    C  ", "  C   CCC   C  ", "   CCCCPCCCC   ", "     CCFCC     ")
            .aisle("     CCCCC     ", "   GG CCC GG   ", "  G    C    G  ", "  G         G  ", " G           G ", "WWW         WWW", "WPW         WPW", "WWW         WWW", " G           G ", "  G         G  ", "  G    C    G  ", "   GG CCC GG   ", "     CFCFC     ")
            .aisle("      CCC      ", "    GG C GG    ", "   G       G   ", "  G         G  ", "  G         G  ", " C           C ", "CPC         CPC", " C           C ", "  G         G  ", "  G         G  ", "   G       G   ", "    GG C GG    ", "      CCC      ")
            .aisle("               ", "     GGCGG     ", "   GG     GG   ", "   G       G   ", "  G         G  ", "  C         C  ", " CPC       CPC ", "  C         C  ", "  G         G  ", "   G       G   ", "   GG     GG   ", "     GGCGG     ", "               ")
            .aisle("               ", "      GCG      ", "    GG   GG    ", "   GG     GG   ", "   G       G   ", "  C         C  ", " CPCC  r  CCPC ", "  C         C  ", "   G       G   ", "   GG     GG   ", "    GG   GG    ", "      GCG      ", "               ")
            .aisle("               ", "               ", "      GCG      ", "     GGCGG     ", "    GG   GG    ", "   CC WCW CC   ", "  CPPCWCWCPPC  ", "   CC WCW CC   ", "    GG   GG    ", "     GGCGG     ", "      GCG      ", "               ", "               ")
            .aisle("               ", "               ", "               ", "               ", "      GCG      ", "     CWCWC     ", "   CCPPPPPCC   ", "     CWHWC     ", "      GCG      ", "               ", "               ", "               ", "               ")
            .aisle("               ", "               ", "               ", "               ", "               ", "      W W      ", "     AWMWB     ", "      W W      ", "               ", "               ", "               ", "               ", "               ")
            .where('M', controller, Direction.SOUTH)
            .where('W', GTBlocks.COIL_TRINIUM.get())
            .where("P", GTBlocks.SUPERCONDUCTING_COIL.get())
            .where('G', Block.getBlock("connectedglass:clear_glass_black"))
            .where('I', Block.getBlock("allthetweaks:atm_star_block"))
            ["where(char,net.minecraft.world.level.block.state.BlockState)"]('Q', Block.getBlock("mekanism:supercharged_coil").defaultBlockState().setValue(BlockProperties.FACING, Direction.EAST))
            ["where(char,net.minecraft.world.level.block.state.BlockState)"]('q', Block.getBlock("mekanism:supercharged_coil").defaultBlockState().setValue(BlockProperties.FACING, Direction.WEST))
            ["where(char,net.minecraft.world.level.block.state.BlockState)"]('R', Block.getBlock("mekanism:supercharged_coil").defaultBlockState().setValue(BlockProperties.FACING, Direction.SOUTH))
            ["where(char,net.minecraft.world.level.block.state.BlockState)"]('r', Block.getBlock("mekanism:supercharged_coil").defaultBlockState().setValue(BlockProperties.FACING, Direction.NORTH))
            ["where(char,net.minecraft.world.level.block.state.BlockState)"]('S', Block.getBlock("mekanism:supercharged_coil").defaultBlockState().setValue(BlockProperties.FACING, Direction.DOWN))
            ["where(char,net.minecraft.world.level.block.state.BlockState)"]('s', Block.getBlock("mekanism:supercharged_coil").defaultBlockState().setValue(BlockProperties.FACING, Direction.UP))
            ["where(char,net.minecraft.world.level.block.state.BlockState)"]('H', Block.getBlock('gtceu:uv_parallel_hatch').defaultBlockState().setValue(BlockProperties.FACING, Direction.SOUTH))
            .where('E', GTMachines.ENERGY_INPUT_HATCH[6], Direction.WEST)
            .where('e', GTMachines.ENERGY_INPUT_HATCH[6], Direction.EAST)
            .where('C', Block.getBlock("gtceu:atomic_casing"))
            .where('F', GTMachines.FLUID_IMPORT_HATCH[6], Direction.UP)
            .where('A', GTMachines.ITEM_IMPORT_BUS[6], Direction.SOUTH)
            .where('B', GTMachines.ITEM_EXPORT_BUS[6], Direction.SOUTH)
            .where(' ', Block.getBlock("minecraft:air"))
            .build())
        .workableCasingRenderer("gtceu:block/casings/gcym/atomic_casing", /*"gtceu:block/casings/gcym/atomic_casing"*/
            "gtceu:block/multiblock/implosion_compressor", false)
})