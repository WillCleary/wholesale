<script setup>
import moment from 'moment';

const { findOne } = useStrapi();
const {
    data: {
        value: {
            data: {
                attributes: {
                    header, report_date, report_groups:
                    { data: reportGroups }
                }
            }
        }
    }
} = await useAsyncData("table", () => findOne('report-tables', '1', {
    populate: {
        report_groups: {
            populate: {
                report_group: true,
                report_entries: {
                    populate: {
                        report_entry: true
                    }
                }
            }
        }
    }
}));

const reportDisplayDate = moment(report_date).format('dddd, MM/DD/YYYY');
</script>

<template>
    <div class="grid place-items-center" id="wholesale">
        <div role="main" class="grid pb-36">
            <div class="max-w-4xl" id="wholesale-wrap">
                <div class="grid" id="wholesale-border">
                    <header class="grid grid-cols-1 place-items-center md:grid-cols-2">
                        <div class="">
                            <img src="~images/wholesale-logo.png" class="object-cover" alt="Daily Fresh Fish Report" />
                        </div>

                        <div class="place-items-center wholesale-header pt-4 md:justify-items-end">
                            <p class="text-center">
                            <p style="text-decoration:underline">
                                Date
                            </p>
                            {{ reportDisplayDate }}
                            <br />
                            <br />
                            <p style="text-decoration:underline">
                                Contact
                            </p>
                            Phone: 503-286-5950
                            <br />
                            Email: Orders@Newmansfish.com
                            </p>
                        </div>
                        <div v-if="header" class="place-items-center wholesale-header text-center">
                            <p>
                                Attention:
                            </p>
                            <p class='text-center'>
                                {{ header }}
                            </p>
                        </div>
                    </header>
                    <br data-clear="all" />
                    <FishReportTable :reportGroups="reportGroups" />
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.wholesale-header {
    color: #00472F;
    font-family: Georgia, Arial;
    font-weight: bold;
}
</style>