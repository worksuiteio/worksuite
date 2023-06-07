import { SetMetadata } from '@nestjs/common';
import { FEATURE_METADATA } from '@worksuite/common';
import { FeatureEnum } from '@worksuite/contracts';

export const FeatureFlag = (feature: FeatureEnum) => SetMetadata(FEATURE_METADATA, feature);