<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerZ32E2xA\srcApp_KernelDevDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerZ32E2xA/srcApp_KernelDevDebugContainer.php') {
    touch(__DIR__.'/ContainerZ32E2xA.legacy');

    return;
}

if (!\class_exists(srcApp_KernelDevDebugContainer::class, false)) {
    \class_alias(\ContainerZ32E2xA\srcApp_KernelDevDebugContainer::class, srcApp_KernelDevDebugContainer::class, false);
}

return new \ContainerZ32E2xA\srcApp_KernelDevDebugContainer([
    'container.build_hash' => 'Z32E2xA',
    'container.build_id' => '02396f27',
    'container.build_time' => 1571995720,
], __DIR__.\DIRECTORY_SEPARATOR.'ContainerZ32E2xA');
