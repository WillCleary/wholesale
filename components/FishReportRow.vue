<script setup>
const { reportEntry: { attributes: reportEntry } } = defineProps({
    'reportEntry': Object
})
const { description, fresh, frozen, origin, productId, refreshed } = reportEntry
</script>

<template>
    <tbody>
        <tr key={ productId }>
            <td class="text-left text-xs md:text-lg py-3 pr-2 break-inside-auto"> {{ description }} </td>
            <td class="text-center text-xs md:text-lg max-w-xs"> {{ (origin ? origin.toUpperCase()
                    : "")
            }}</td>
            <td class="text-center text-xs md:text-lg max-w-xs"> {{ fresh ? "✔" : "" }} </td>
            <td class="text-center text-xs md:text-lg max-w-xs"> {{ frozen ? "✔" : "" }} </td>
        </tr>
    </tbody>
</template>