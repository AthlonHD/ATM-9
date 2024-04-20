GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('apiary_i')
        .category('apiary_i')
        .setEUIO('in')
        .setMaxIOSize(6, 6, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.SCIENCE)
    
    event.create('apiary_ii')
        .category('apiary_ii')
        .setEUIO('in')
        .setMaxIOSize(6, 15, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.SCIENCE)
    
    event.create('comb_processor')
        .category('comb_processor')
        .setEUIO('in')
        .setMaxIOSize(6, 6, 0, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MIXER)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('apiary_i', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('apiary_i')
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        // .recipeModifier(GTRecipeModifiers.PARALLEL_HATCH.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK, GTRecipeModifiers.ELECTRIC_OVERCLOCK))
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK)])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('  CCC  ', '  CCC  ', '  CCC  ', '  CCC  ', '  CCC  ', '  CCC  ')
            .aisle(' CCCCC ', ' CMMMC ', ' CW#WC ', ' CW#WC ', ' CWWWC ', ' CCCCC ')
            .aisle('CCCCCCC', 'CMMMMMC', 'C##S##C', 'C#####C', 'C#W#W#C', 'CCCOCCC')
            .aisle(' CCCCC ', ' CMMMC ', ' CW#WC ', ' CW#WC ', ' CWWWC ', ' CCCCC ')
            .aisle('  CCC  ', '  CKC  ', '  CCC  ', '  CCC  ', '  CCC  ', '  CCC  ')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('M', Predicates.blockTag(Tags.block("minecraft:dirt")))
            .where('S', Predicates.blockTag(Tags.block("minecraft:flowers")))
            .where('W', Predicates.blocks('gtceu:treated_wood_frame'))
            .where('C', Predicates.blocks(GTBlocks.CASING_STAINLESS_CLEAN.get()).setMinGlobalLimited(74)
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
            )
            .where('O', Predicates.abilities(PartAbility.MUFFLER)
                .setExactLimit(1)
            )
            .where('#', Predicates.air())
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_clean_stainless_steel', 'gtceu:block/multiblock/implosion_compressor', false)

    event.create('apiary_ii', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('apiary_ii')
        .appearanceBlock(GTBlocks.CASING_TITANIUM_STABLE)
        .tooltips(Component.translatable("kubejs.apiary_ii.tooltip.bee_requirements"))
        // .recipeModifier(GTRecipeModifiers.PARALLEL_HATCH.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK, GTRecipeModifiers.ELECTRIC_OVERCLOCK))
        // .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK)])
        .recipeModifiers(GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('  CCC  ', '  CCC  ', '  CCC  ', '  CCC  ', '  CCC  ', '  CCC  ')
            .aisle(' CCCCC ', ' CMMMC ', ' CW#WC ', ' CW#WC ', ' CWWWC ', ' CCCCC ')
            .aisle('CCCCCCC', 'CMMMMMC', 'C##S##C', 'C#####C', 'C#W#W#C', 'CCCOCCC')
            .aisle(' CCCCC ', ' CMMMC ', ' CW#WC ', ' CW#WC ', ' CWWWC ', ' CCCCC ')
            .aisle('  CCC  ', '  CKC  ', '  CCC  ', '  CCC  ', '  CCC  ', '  CCC  ')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('M', Predicates.blockTag(Tags.block("minecraft:dirt")))
            .where('S', Predicates.blockTag(Tags.block("minecraft:flowers")))
            .where('W', Predicates.blocks('gtceu:treated_wood_frame'))
            .where('C', Predicates.blocks(GTBlocks.CASING_TITANIUM_STABLE.get()).setMinGlobalLimited(74)
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                // .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
            )
            .where('O', Predicates.abilities(PartAbility.MUFFLER)
                .setExactLimit(1)
            )
            .where('#', Predicates.air())
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_stable_titanium', 'gtceu:block/multiblock/implosion_compressor', false)

    event.create('comb_processor', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('comb_processor')
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        // .recipeModifier(GTRecipeModifiers.PARALLEL_HATCH.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK, GTRecipeModifiers.ELECTRIC_OVERCLOCK))
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK)])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('   CCC   ', '         ', '    S    ', '   SSS   ', '  SSSSS  ', '  SSSSS  ', '  SSSSS  ', '         ', '         ', '         ', '         ', '         ')
            .aisle('  CFFFC  ', '   SSS   ', '  SS SS  ', ' SS   SS ', ' S     S ', ' S     S ', ' S     S ', '         ', '         ', '         ', '         ', '         ')
            .aisle(' CFFSFFC ', '  SS#SS  ', ' S  P  S ', ' S     S ', 'S       S', 'S       S', 'S P     S', '         ', '         ', '         ', '    O    ', '         ')
            .aisle('CFFSSSFFC', ' SS###SS ', ' S  P  S ', 'S       S', 'S       S', 'S       S', 'S  P    S', '         ', '   CCC   ', '   CCC   ', '   CPC   ', '    C    ')
            .aisle('CFSSSSSFC', ' S##P##S ', 'S   P   S', 'S   P   S', 'S PPPPP S', 'S   P   S', 'S   P   S', '    G    ', '   CPC   ', '   CGC   ', '   CGC   ', '   CCC   ')
            .aisle('CFFSSSFFC', ' SS###SS ', ' S  P  S ', 'S       S', 'S       S', 'S       S', 'S    P  S', '         ', '   CCC   ', '   CCC   ', '   CCC   ', '   CCC   ')
            .aisle('CCFFSFFCC', '  SS#SS  ', ' S  P  S ', ' S     S ', 'S       S', 'S       S', 'S     P S', '         ', '         ', '   CCC   ', '   CCC   ', '   CCC   ')
            .aisle('CCCFFFCCC', '   SSS   ', '  SS SS  ', ' SS   SS ', ' S     S ', ' S     S ', ' S     S ', '         ', '         ', '   CCC   ', '   CCC   ', '   CCC   ')
            .aisle('CCCCCCCCC', '         ', '    S    ', '   SSS   ', '  SSSSS  ', '  SSSSS  ', '  SSSSS  ', '         ', '         ', '   CCC   ', '   CCC   ', '   CCC   ')
            .aisle('CCCCCCCCC', '         ', '         ', '         ', '         ', '         ', '         ', '         ', '   CCC   ', '   CCC   ', '   CCC   ', '   CCC   ')
            .aisle('CCCCCCCCC', ' CCCCCCC ', '  CCCCC  ', '  CCCCC  ', '  CCCCC  ', '   CCC   ', '   CCC   ', '   CCC   ', '   CCC   ', '   CCC   ', '   CCC   ', '   CCC   ')
            .aisle('CCCCCCCCC', ' CCCCCCC ', '  CCCCC  ', '  CCCCC  ', '  CCCCC  ', '   CCC   ', '   CCC   ', '   CCC   ', '   CCC   ', '   CCC   ', '   CCC   ', '   CCC   ')
            .aisle('CCCCCCCCC', ' CCCCCCC ', '  CCCCC  ', '  CCCCC  ', '  CCCCC  ', '   CCC   ', '   CCC   ', '   CCC   ', '   CCC   ', '   CCC   ', '   CCC   ', '   CCC   ')
            .aisle('CCCCCCCCC', ' CCCKCCC ', '  CCCCC  ', '  CCCCC  ', '  CCCCC  ', '   CCC   ', '   CCC   ', '   CCC   ', '   CCC   ', '   CCC   ', '   CCC   ', '         ')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('F', Predicates.blocks('gtceu:steel_frame'))
            .where('S', Predicates.blocks(GTBlocks.CASING_STAINLESS_CLEAN.get()))
            .where('P', Predicates.blocks(GTBlocks.CASING_STEEL_PIPE.get()))
            .where('G', Predicates.blocks(GTBlocks.CASING_STAINLESS_STEEL_GEARBOX.get()))
            .where('C', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get()).setMinGlobalLimited(250)
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
            )
            .where('O', Predicates.abilities(PartAbility.MUFFLER)
                .setExactLimit(1)
            )
            .where('#', Predicates.blocks('minecraft:honey_block'))
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_solid_steel', 'gtceu:block/multiblock/implosion_compressor', false)
})